

# Calm Commerce
> Select a massage!

## Table of contents
* [General info](#general-info)
* [Project Demo](#project-demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
* Initial commit - 5/27/22

## Project Demo

## Technologies
### Backend Development
* Node.js - version 16.15.0
* Express.js - version 4.18.1
* MongoDB - version 5.0.9

### Frontend Development
* React.js - version 18.1.0

## Setup
To try out this project:
1. Clone this repository to your computer
2. In the command line, navigate to the root directory and type:
  $ npm install
3. CD into frontend and type:
  $ npm install
4. To start the server, cd back to the root directory and type:
  $ npm run dev
5. In your browser, navigate to http://localhost:5000

## Code Examples
### Route 1
```javascript
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/api/service/services') /* TODO: Install CORS package to avoid this hacky workaround. See frontend/package.json */
      const json = await response.json()

      if (response.ok) {
        setServices(json)
      } else {
        console.log('response not ok')
      }
    }

    fetchServices()
  }, [])
```
### Route 2
``` javascript

```
## Features


## Status
In progress

## Inspiration
Little project where I build a nice modern site showcasing the services of a local small business! This is not intended for production use, just a project idea at this time of inception.

## Contact
Created by Cole Robinson (https://www.linkedin.com/in/cwrobinson-/)
Let me know what you think! All feedback welcome.

## License
