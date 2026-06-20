/* jshint esversion: 8 */
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: false }));

// Helper to find and parse JSON data
function loadJSON(filename) {
  const paths = [filename, `data/${filename}`, `database/data/${filename}`, `server/database/data/${filename}`];
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    }
  }
  return null;
}

const reviews_data = loadJSON("reviews.json") || { reviews: [] };
const dealerships_data = loadJSON("dealerships.json") || { dealerships: [] };

let reviews = reviews_data.reviews || [];
let dealerships = dealerships_data.dealerships || [];

// Express route to home
app.get('/', async (req, res) => {
    res.send("Welcome to the Mongoose API (Mock Mode)");
});

// Express route to fetch all reviews
app.get('/fetchReviews', async (req, res) => {
  try {
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch reviews by a particular dealer
app.get('/fetchReviews/dealer/:id', async (req, res) => {
  try {
    const filtered = reviews.filter(r => String(r.dealership) === String(req.params.id));
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch all dealerships
app.get('/fetchDealers', async (req, res) => {
  try {
    res.status(200).json(dealerships);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching dealerships' });
  }
});

// Express route to fetch dealerships by a particular state
app.get('/fetchDealers/:state', async (req, res) => {
    const state = req.params.state;
    try {
        const filtered = dealerships.filter(d => d.state.toLowerCase() === state.toLowerCase());
        if (filtered.length === 0 ) {
            res.status(404).json({ error: `No dealerships found in state: ${state}`});
        } else {
            res.json(filtered);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching dealerships by state' });
    }
  });

// Express route to fetch dealers by ID
app.get('/fetchDealer/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const dealership = dealerships.find(d => d.id === id);
        if (!dealership) {
            res.status(404).json({ error: `No dealership found with ID: ${id}`});
        } else {
            res.json(dealership);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching dealership by ID'});
    }
  });

// Express route to insert review
app.post('/insert_review', async (req, res) => {
  try {
    let data;
    if (req.body && typeof req.body === 'object' && Object.keys(req.body).length > 0) {
      data = req.body;
    } else {
      // Fallback if body parser didn't parse it
      data = JSON.parse(req.body.toString());
    }
    
    let new_id = 1;
    if (reviews.length > 0) {
      const sorted = [...reviews].sort((a, b) => b.id - a.id);
      new_id = (sorted[0].id || 0) + 1;
    }

    const review = {
      "id": new_id,
      "name": data.name,
      "dealership": data.dealership,
      "review": data.review,
      "purchase": data.purchase,
      "purchase_date": data.purchase_date,
      "car_make": data.car_make,
      "car_model": data.car_model,
      "car_year": data.car_year,
    };

    reviews.push(review);
    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error inserting review' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

