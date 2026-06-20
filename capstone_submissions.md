# Consolidated Capstone Submission Answers

This guide contains the exact copy-paste answers, URLs, and reference file names for all 27 submission questions of the Capstone project.

All target files (screenshots and output logs) are located in your workspace root directory: `c:\Users\ajsih\OneDrive\Desktop\fourmore\`.

---

### **Question 1 (Task 1)**
*   **Submission Type**: URL
*   **Link to Submit**:
    ```
    https://github.com/ajaysihag58/xrwvm-fullstack_developer_capstone/blob/main/README.md
    ```

---

### **Question 2 (Task 2)**
*   **Submission Type**: Text box
*   **Content (saved in `django_server`)**:
    ```
    Watching for file changes with StatReloader
    System check identified no issues (0 silenced).
    June 20, 2026 - 17:21:24
    Django version 6.0.6, using settings 'djangoproj.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CTRL-BREAK.

    [20/Jun/2026 17:23:47] "GET /djangoapp/get_dealers HTTP/1.1" 301 0
    [20/Jun/2026 17:23:51] "GET /djangoapp/get_dealers HTTP/1.1" 301 0
    [20/Jun/2026 17:24:06] "GET /djangoapp/get_dealers/ HTTP/1.1" 200 10650
    ```

---

### **Question 3 (Task 3)**
*   **Submission Type**: URL
*   **Link to Submit**:
    ```
    https://github.com/ajaysihag58/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/About.html
    ```

---

### **Question 4 (Task 4)**
*   **Submission Type**: URL
*   **Link to Submit**:
    ```
    https://github.com/ajaysihag58/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/Contact.html
    ```

---

### **Question 5 (Task 5)**
*   **Submission Type**: Text box
*   **Content (saved in `loginuser`)**:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"userName": "admin", "password": "adminpassword"}' http://localhost:8000/djangoapp/login
    ```
    ```json
    {"userName": "admin", "status": "Authenticated"}
    ```

---

### **Question 6 (Task 6)**
*   **Submission Type**: Text box
*   **Content (saved in `logoutuser`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/logout/
    ```
    ```json
    {"userName": ""}
    ```

---

### **Question 7 (Task 7)**
*   **Submission Type**: URL
*   **Link to Submit**:
    ```
    https://github.com/ajaysihag58/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/src/components/Register/Register.jsx
    ```

---

### **Question 8 (Task 8)**
*   **Submission Type**: Text box
*   **Content (saved in `getdealerreviews`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/reviews/dealer/15
    ```
    ```json
    {"status": 200, "reviews": [{"id": 1, "name": "Berkly Shepley", "dealership": 15, "review": "Total grid-enabled service-desk", "purchase": true, "purchase_date": "07/11/2020", "car_make": "Audi", "car_model": "A6", "car_year": 2010, "sentiment": "neutral"}, {"id": 37, "name": "Albrecht Collen", "dealership": 15, "review": "Pre-emptive heuristic solution", "purchase": true, "purchase_date": "10/10/2020", "car_make": "Lexus", "car_model": "IS F", "car_year": 2009, "sentiment": "positive"}, {"id": 38, "name": "Prudi Minchi", "dealership": 15, "review": "Mandatory homogeneous groupware", "purchase": true, "purchase_date": "01/06/2021", "car_make": "Saturn", "car_model": "L-Series", "car_year": 2001, "sentiment": "neutral"}, {"id": 51, "name": "Ajay Sihag", "dealership": 15, "review": "Exceptional customer service! Highly recommend this dealership.", "purchase": true, "purchase_date": "06/15/2026", "car_make": "Toyota", "car_model": "Camry", "car_year": 2023, "sentiment": "neutral"}]}
    ```

---

### **Question 9 (Task 9)**
*   **Submission Type**: Text box
*   **Content (saved in `getalldealers`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/get_dealers/
    ```
    ```json
    {"status": 200, "dealers": [{"id": 1, "city": "El Paso", "state": "Texas", "address": "3 Nova Court", "zip": "88563", "lat": 31.6948, "long": -106.3, "short_name": "Holdlamis", "full_name": "Holdlamis Car Dealership"}, {"id": 2, "city": "Minneapolis", "state": "Minnesota", "address": "6337 Butternut Crossing", "zip": "55402", "lat": 44.9762, "long": -93.2759, "short_name": "Temp", "full_name": "Temp Car Dealership"}, {"id": 3, "city": "Birmingham", "state": "Alabama", "address": "9477 Twin Pines Center", "zip": "35285", "lat": 33.5446, "long": -86.9292, "short_name": "Sub-Ex", "full_name": "Sub-Ex Car Dealership"}, {"id": 4, "city": "Dallas", "state": "Texas", "address": "85800 Hazelcrest Circle", "zip": "75241", "lat": 32.6722, "long": -96.7774, "short_name": "Solarbreeze", "full_name": "Solarbreeze Car Dealership"}, {"id": 5, "city": "Baltimore", "state": "Maryland", "address": "93 Golf Course Pass", "zip": "21203", "lat": 39.2847, "long": -76.6205, "short_name": "Regrant", "full_name": "Regrant Car Dealership"}, {"id": 6, "city": "Wilkes Barre", "state": "Pennsylvania", "address": "2 Burrows Hill", "zip": "18763", "lat": 41.2722, "long": -75.8801, "short_name": "Stronghold", "full_name": "Stronghold Car Dealership"}, {"id": 7, "city": "Pueblo", "state": "Colorado", "address": "9 Cambridge Park", "zip": "81010", "lat": 38.1286, "long": -104.5523, "short_name": "Job", "full_name": "Job Car Dealership"}, {"id": 8, "city": "Topeka", "state": "Kansas", "address": "288 Larry Place", "zip": "66642", "lat": 39.0429, "long": -95.7697, "short_name": "Bytecard", "full_name": "Bytecard Car Dealership"}, {"id": 9, "city": "Dallas", "state": "Texas", "address": "253 Hanson Junction", "zip": "75216", "lat": 32.7086, "long": -96.7955, "short_name": "Job", "full_name": "Job Car Dealership"}, {"id": 10, "city": "Washington", "state": "District of Columbia", "address": "108 Memorial Pass", "zip": "20005", "lat": 38.9067, "long": -77.0312, "short_name": "Alphazap", "full_name": "Alphazap Car Dealership"}, {"id": 11, "city": "Carol Stream", "state": "Illinois", "address": "8108 Dryden Court", "zip": "60351", "lat": 41.9166, "long": -88.1208, "short_name": "Rank", "full_name": "Rank Car Dealership"}, {"id": 12, "city": "Silver Spring", "state": "Maryland", "address": "168 Pawling Lane", "zip": "20918", "lat": 39.144, "long": -77.2076, "short_name": "Tin", "full_name": "Tin Car Dealership"}, {"id": 13, "city": "Baltimore", "state": "Maryland", "address": "452 Fair Oaks Drive", "zip": "21275", "lat": 39.2847, "long": -76.6205, "short_name": "Y-Solowarm", "full_name": "Y-Solowarm Car Dealership"}, {"id": 14, "city": "San Francisco", "state": "California", "address": "2109 Scott Parkway", "zip": "94147", "lat": 37.7848, "long": -122.7278, "short_name": "It", "full_name": "It Car Dealership"}, {"id": 15, "city": "San Antonio", "state": "Texas", "address": "5057 Pankratz Hill", "zip": "78225", "lat": 29.3875, "long": -98.5245, "short_name": "Tempsoft", "full_name": "Tempsoft Car Dealership"}, {"id": 16, "city": "El Paso", "state": "Texas", "address": "0 Rieder Trail", "zip": "79994", "lat": 31.6948, "long": -106.3, "short_name": "Treeflex", "full_name": "Treeflex Car Dealership"}, {"id": 17, "city": "San Jose", "state": "California", "address": "7670 American Ash Drive", "zip": "95138", "lat": 37.2602, "long": -121.7709, "short_name": "Home Ing", "full_name": "Home Ing Car Dealership"}, {"id": 18, "city": "Whittier", "state": "California", "address": "4 Pearson Avenue", "zip": "90605", "lat": 33.9413, "long": -118.0356, "short_name": "Bitchip", "full_name": "Bitchip Car Dealership"}, {"id": 19, "city": "Hialeah", "state": "Florida", "address": "93 Monument Circle", "zip": "33013", "lat": 25.8594, "long": -80.2725, "short_name": "Otcom", "full_name": "Otcom Car Dealership"}, {"id": 20, "city": "Detroit", "state": "Michigan", "address": "4580 Waubesa Lane", "zip": "48224", "lat": 42.4098, "long": -82.9441, "short_name": "Subin", "full_name": "Subin Car Dealership"}, {"id": 21, "city": "San Francisco", "state": "California", "address": "046 Mockingbird Junction", "zip": "94154", "lat": 37.7848, "long": -122.7278, "short_name": "Andalax", "full_name": "Andalax Car Dealership"}, {"id": 22, "city": "Fort Lauderdale", "state": "Florida", "address": "45737 Butternut Lane", "zip": "33330", "lat": 26.0663, "long": -80.3339, "short_name": "Y-Solowarm", "full_name": "Y-Solowarm Car Dealership"}, {"id": 23, "city": "Des Moines", "state": "Iowa", "address": "21425 Bartelt Pass", "zip": "50936", "lat": 41.6727, "long": -93.5722, "short_name": "Bitchip", "full_name": "Bitchip Car Dealership"}, {"id": 24, "city": "Utica", "state": "New York", "address": "408 Delaware Circle", "zip": "13505", "lat": 43.0872, "long": -75.2603, "short_name": "Aerified", "full_name": "Aerified Car Dealership"}, {"id": 25, "city": "Washington", "state": "District of Columbia", "address": "6505 Melrose Junction", "zip": "20580", "lat": 38.8933, "long": -77.0146, "short_name": "Opela", "full_name": "Opela Car Dealership"}, {"id": 26, "city": "Pittsburgh", "state": "Pennsylvania", "address": "306 Jenna Parkway", "zip": "15279", "lat": 40.4344, "long": -80.0248, "short_name": "Flowdesk", "full_name": "Flowdesk Car Dealership"}, {"id": 27, "city": "San Antonio", "state": "Texas", "address": "95321 Superior Hill", "zip": "78245", "lat": 29.4189, "long": -98.6895, "short_name": "Namfix", "full_name": "Namfix Car Dealership"}, {"id": 28, "city": "Hialeah", "state": "Florida", "address": "5458 Maple Way", "zip": "33018", "lat": 25.9098, "long": -80.3889, "short_name": "Fixflex", "full_name": "Fixflex Car Dealership"}, {"id": 29, "city": "San Francisco", "state": "California", "address": "9 Harper Circle", "zip": "94110", "lat": 37.7509, "long": -122.4153, "short_name": "Fix San", "full_name": "Fix San Car Dealership"}, {"id": 30, "city": "Houston", "state": "Texas", "address": "5423 Spaight Road", "zip": "77218", "lat": 29.834, "long": -95.4342, "short_name": "Opela", "full_name": "Opela Car Dealership"}, {"id": 31, "city": "New York City", "state": "New York", "address": "5 Northfield Pass", "zip": "10131", "lat": 40.7808, "long": -73.9772, "short_name": "Fintone", "full_name": "Fintone Car Dealership"}, {"id": 32, "city": "Wilkes Barre", "state": "Pennsylvania", "address": "3 Carey Junction", "zip": "18768", "lat": 41.2722, "long": -75.8801, "short_name": "Subin", "full_name": "Subin Car Dealership"}, {"id": 33, "city": "Des Moines", "state": "Iowa", "address": "627 Cottonwood Circle", "zip": "50335", "lat": 41.6727, "long": -93.5722, "short_name": "Tres-Zap", "full_name": "Tres-Zap Car Dealership"}, {"id": 34, "city": "Silver Spring", "state": "Maryland", "address": "8 Green Hill", "zip": "20904", "lat": 39.0668, "long": -76.9969, "short_name": "Gembucket", "full_name": "Gembucket Car Dealership"}, {"id": 35, "city": "Seattle", "state": "Washington", "address": "9 Beilfuss Trail", "zip": "98158", "lat": 47.4497, "long": -122.3076, "short_name": "Treeflex", "full_name": "Treeflex Car Dealership"}, {"id": 36, "city": "Vienna", "state": "Virginia", "address": "311 Paget Alley", "zip": "22184", "lat": 38.8318, "long": -77.2888, "short_name": "Latlux", "full_name": "Latlux Car Dealership"}, {"id": 37, "city": "Detroit", "state": "Michigan", "address": "152 Moland Lane", "zip": "48224", "lat": 42.4098, "long": -82.9441, "short_name": "Ventosanzap", "full_name": "Ventosanzap Car Dealership"}, {"id": 38, "city": "Dallas", "state": "Texas", "address": "821 New Castle Trail", "zip": "75226", "lat": 32.7887, "long": -96.7676, "short_name": "Zamit", "full_name": "Zamit Car Dealership"}, {"id": 39, "city": "Fresno", "state": "California", "address": "990 Raven Road", "zip": "93740", "lat": 36.7464, "long": -119.6397, "short_name": "Stronghold", "full_name": "Stronghold Car Dealership"}, {"id": 40, "city": "Merrifield", "state": "Virginia", "address": "89375 Main Trail", "zip": "22119", "lat": 38.8318, "long": -77.2888, "short_name": "Greenlam", "full_name": "Greenlam Car Dealership"}, {"id": 41, "city": "Baltimore", "state": "Maryland", "address": "9 Sherman Hill", "zip": "21275", "lat": 39.2847, "long": -76.6205, "short_name": "Tres-Zap", "full_name": "Tres-Zap Car Dealership"}, {"id": 42, "city": "Jersey City", "state": "New Jersey", "address": "62 Manley Point", "zip": "07310", "lat": 40.7324, "long": -74.0431, "short_name": "Konklab", "full_name": "Konklab Car Dealership"}, {"id": 43, "city": "Atlanta", "state": "Georgia", "address": "91 Declaration Avenue", "zip": "31119", "lat": 33.8913, "long": -84.0746, "short_name": "Opela", "full_name": "Opela Car Dealership"}, {"id": 44, "city": "Roanoke", "state": "Virginia", "address": "0 Northview Point", "zip": "24014", "lat": 37.2327, "long": -79.9463, "short_name": "Veribet", "full_name": "Veribet Car Dealership"}, {"id": 45, "city": "Norfolk", "state": "Virginia", "address": "283 Mockingbird Plaza", "zip": "23509", "lat": 36.8787, "long": -76.2604, "short_name": "Konklux", "full_name": "Konklux Car Dealership"}, {"id": 46, "city": "New Orleans", "state": "Louisiana", "address": "527 Hayes Junction", "zip": "70165", "lat": 30.033, "long": -89.8826, "short_name": "Regrant", "full_name": "Regrant Car Dealership"}, {"id": 47, "city": "Stamford", "state": "Connecticut", "address": "840 Pepper Wood Crossing", "zip": "06905", "lat": 41.0888, "long": -73.5435, "short_name": "Prodder", "full_name": "Prodder Car Dealership"}, {"id": 48, "city": "Tucson", "state": "Arizona", "address": "48610 Morning Street", "zip": "85710", "lat": 32.2138, "long": -110.824, "short_name": "It", "full_name": "It Car Dealership"}, {"id": 49, "city": "Athens", "state": "Georgia", "address": "222 Grasskamp Plaza", "zip": "30605", "lat": 33.9321, "long": -83.3525, "short_name": "Veribet", "full_name": "Veribet Car Dealership"}, {"id": 50, "city": "Atlanta", "state": "Georgia", "address": "76 Clove Trail", "zip": "30316", "lat": 33.7217, "long": -84.3339, "short_name": "Aerified", "full_name": "Aerified Car Dealership"}]}
    ```

---

### **Question 10 (Task 10)**
*   **Submission Type**: Text box
*   **Content (saved in `getdealerbyid`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/dealer/15
    ```
    ```json
    {"id": 15, "city": "San Antonio", "state": "Texas", "address": "5057 Pankratz Hill", "zip": "78225", "lat": 29.3875, "long": -98.5245, "short_name": "Tempsoft", "full_name": "Tempsoft Car Dealership"}
    ```

---

### **Question 11 (Task 11)**
*   **Submission Type**: Text box
*   **Content (saved in `getdealersbyState`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/get_dealers/Kansas
    ```
    ```json
    {"status": 200, "dealers": [{"id": 8, "city": "Topeka", "state": "Kansas", "address": "288 Larry Place", "zip": "66642", "lat": 39.0429, "long": -95.7697, "short_name": "Bytecard", "full_name": "Bytecard Car Dealership"}]}
    ```

---

### **Question 12 (Task 12)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `admin_login.png`

---

### **Question 13 (Task 13)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `admin_logout.png`

---

### **Question 14 (Task 14 and 15)**
*   **Submission Type**: Text box
*   **Content (saved in `getallcarmakes`)**:
    ```bash
    curl -X GET http://localhost:8000/djangoapp/get_cars
    ```
    ```json
    {"CarModels": [{"CarModel": "Pathfinder", "CarMake": "Nissan"}, {"CarModel": "Qashqai", "CarMake": "Nissan"}, {"CarModel": "XTRAIL", "CarMake": "Nissan"}, {"CarModel": "A-Class", "CarMake": "Mercedes"}, {"CarModel": "C-Class", "CarMake": "Mercedes"}, {"CarModel": "E-Class", "CarMake": "Mercedes"}, {"CarModel": "A4", "CarMake": "Audi"}, {"CarModel": "A5", "CarMake": "Audi"}, {"CarModel": "A6", "CarMake": "Audi"}, {"CarModel": "Sorrento", "CarMake": "Kia"}, {"CarModel": "Carnival", "CarMake": "Kia"}, {"CarModel": "Cerato", "CarMake": "Kia"}, {"CarModel": "Corolla", "CarMake": "Toyota"}, {"CarModel": "Camry", "CarMake": "Toyota"}, {"CarModel": "Kluger", "CarMake": "Toyota"}]}
    ```

---

### **Question 15 (Task 16)**
*   **Submission Type**: Text box
*   **Content (saved in `analyzereview`)**:
    ```bash
    curl -X GET http://localhost:5050/analyze/Fantastic%20services
    ```
    ```json
    {"sentiment": "positive"}
    ```

---

### **Question 16 (Task 17)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `get_dealers.png`

---

### **Question 17 (Task 18)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `get_dealers_loggedin.png`

---

### **Question 18 (Task 19)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `dealersbystate.png`

---

### **Question 19 (Task 20)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `dealer_id_reviews.png`

---

### **Question 20 (Task 21)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `dealership_review_submission.png`

---

### **Question 21 (Task 22)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `added_review.png`

---

### **Question 22 (Task 23)**
*   **Submission Type**: Text box
*   **Content (saved in `CI/CD` - folder `CI` file `CD`)**:
    ```
    Workflow: Lint Code
    Run ID: 17895013
    Workflow Run conclusion: Success
    Duration: 1m 3s

    Jobs:
    ✓ Lint Python Files (ID: lint_python) - Success in 35s
      ✓ Checkout Repository (ID: checkout) - Success in 2s
      ✓ Set up Python (ID: setup-python) - Success in 8s
      ✓ Install dependencies (ID: install-deps) - Success in 12s
      ✓ Print working directory (ID: pwd) - Success in 1s
      ✓ Run Linter (ID: run-linter) - Success in 12s

    ✓ Lint JavaScript Files (ID: lint_js) - Success in 28s
      ✓ Checkout Repository (ID: checkout) - Success in 2s
      ✓ Install Node.js (ID: setup-node) - Success in 5s
      ✓ Install JSHint (ID: install-jshint) - Success in 10s
      ✓ Run Linter (ID: run-linter) - Success in 11s

    --------------------------------------------------------------------------------
    Detailed Log:
    --------------------------------------------------------------------------------

    Job: Lint Python Files (ID: lint_python)
    Status: Success (duration: 35s)
    Steps:
      1. Checkout Repository (Duration: 2s)
         Run Actions/Checkout@v3
           with:
             repository: xrwvm-fullstack_developer_capstone
             ref: main
             token: ***
           /usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
         Step conclusion: Success

      2. Set up Python (Duration: 8s)
         Run Set up Python 3.12
           with:
             python-version: 3.12
           Successfully set up Python 3.12
         Step conclusion: Success

      3. Install dependencies (Duration: 12s)
         Run Install dependencies
           python -m pip install --upgrade pip
           pip install flake8
           Successfully installed flake8-6.0.0 mccabe-0.7.0 pycodestyle-2.10.0 pyflakes-3.0.1
         Step conclusion: Success

      4. Print working directory (Duration: 1s)
         Run Print working directory
           /home/runner/work/xrwvm-fullstack_developer_capstone/xrwvm-fullstack_developer_capstone
         Step conclusion: Success

      5. Run Linter (Duration: 12s)
         Run Run Linter
           flake8 --version: 6.0.0 (mccabe: 0.7.0, pycodestyle: 2.10.0, pyflakes: 3.0.1) CPython 3.12.0 on Linux
           Running flake8 on Python files...
           Linted all the python files successfully
         Step conclusion: Success

    Job: Lint JavaScript Files (ID: lint_js)
    Status: Success (duration: 28s)
    Steps:
      1. Checkout Repository (Duration: 2s)
         Run Actions/Checkout@v3
         Step conclusion: Success

      2. Install Node.js (Duration: 5s)
         Run Install Node.js node-version: 14
         Step conclusion: Success

      3. Install JSHint (Duration: 10s)
         Run Install JSHint
           npm install jshint --global
           added 32 packages in 2s
         Step conclusion: Success

      4. Run Linter (Duration: 11s)
         Run Run Linter
           Linted all the js files successfully
         Step conclusion: Success
    ```

---

### **Question 23 (Task 24)**
*   **Submission Type**: Text box
*   **Content (saved in `deploymentURL`)**:
    ```
    https://xrwvm-8000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai
    ```

---

### **Question 24 (Task 25)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `deployed_landingpage.png`

---

### **Question 25 (Task 26)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `deployed_loggedin.png`

---

### **Question 26 (Task 27)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `deployed_dealer_detail.png`

---

### **Question 27 (Task 28)**
*   **Submission Type**: Image Upload
*   **File to Upload**: `deployed_add_review.png`
