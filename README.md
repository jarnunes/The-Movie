# The-Movie

Consume TMDB API with Python and Django Framework

## Quick Start

> Install the dependencies

```bash
pip install -r requirements.txt
```

> Migrations models
```bash
py manage.py makemigrations
py manage.py migrate
```

> Create superuser
````bash
py manage.py createsuperuser 
````

> Start the app

````bash
py manage.py runserver
````

Visit `http://localhost:8000` in your browser. The app should be up & running.
When your access the home page, you may think that something it's wrong. 
But calm down. First, you need access admin page and register your API KEY.

So, let's do it.
> Configure API Key

Visit `http://localhost:8000/admin` and input the credentials that you used to create superuser.
Now, access the Model 'configuracao' and register your API Key