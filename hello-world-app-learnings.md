# Configuring React for first use
- Install React Dev Tools (plug-in) into Chrome 
- npm install
- npx create-react-app hello-world-app
  - Note: run this from a directory within WSL (like, under /home...) in order for hot reloading (in order to not have to exit, and then re-run npm start to see changes made during development)
- cd into hello-world-app
- This is where we'll launch the app from, so its good to be in here, as home base
- Edit the app: the app code is under src/App.js
- Run npm start to launch the app
- In browser, view page, and use F12 (developer tools) new (added with plug-in) "Components" and "Profiler" tabs

# Create first website
Create components that use JSX to make a simple website
- create a component for each "section" of a website...such as an About Me website: Header, About, Skills, Projects, Contact, Footer
  - Each component could be its own .js file
- create a component in the app.js that returns all the other components (rendering a UI)
Set up CSS
Add a form component
- will use state (useState) to manage formData
- setFormData
- handleChange 
  - prevState
- handleSubmit
  - fetch('http://localhost:5000/submit-form (relates to Flask backend, to be described below)
- onSubmit
- { name, value } = e.target  (destructuring)

CSS for React app
- Flexbox Layout for Main Content
- Media Query for Small Screen
- grid-template-columns
- For layout, use divs, and define what components live in what divs, where the called, in the app component in app.js
Set up React frontend to use Flask backend, which will do API calls, other processing
- Overview 
  - Flask backend listens for API calls
  - Frontend makes calls with "fetch" or similar
  - Data fetched (GET) is stored in React state variables using hooks like useState...and dynamically rendered within JSX elements
  - Have Flask connected to a DB...use DB for storing data that, perhaps, we submit via frontend
  - add to package.json: "proxy": "http://localhost:5000" (?)
  - And can use http://localhost:5000/api...to avoid CORS issues (?)
- Flask packages needed: Flask-Cors Flask-SQLAlchemy
- Setting up API and Data Model/insert related code
  - class ContactForm(db.Model):
  - @app.route('/submit-form', methods=['POST'])
  - define method that uses data = request.get_json(), and then does  db.session.add(new_entry)
- Flask app 
  - if __name__ == '__main__':
    - db.create_all()
    - app.run(debug=True)
	
Configure Flask to act as the backend, that serves the React app (as static files)
- Run npm run build (against React App) to create directory with all the static files needed (i.e. create the Flask app)
- Add "build" directory, with those files, to the directory where app.py lives
- Install/Import Flask's send_from_directory library (?)
- app = Flask(__name__, static_folder='build', static_url_path='/')
- @app.route('/', defaults={'path': ''})
- @app.route('/<path:path>')
- define a function to serve React app
  - def serve_react_app(path):
    - if path != "" and os.path.exists(os.path.join(app.static_folder, path))...

Random Learnings
- JSX is basically functionality/syntax(?) for writing HTML, and HTML(/XML(?)) like syntax, within JS
  - allows adding {} for writing Javascript, for looping, etc.
- Componenet structure syntax includes defining the function and defining what it will return(?)
  - and, there are different syntaxes, in JS, for defining functions...each might have advantages/uses(?)
    - const componenetname = () => (arrow function)
	- const App = function() (function expression)
	- function App() (function declaration)
- Some tools
  - Jest
  - Babel
  - React Developer tools?
  - React Router
  - Postman
  - JSFiddle
  
# Next steps for exploring React: 
- set up router 
- Use props
- Use state more
- Use Class components more 
