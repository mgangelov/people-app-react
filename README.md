# people-app-react
 
A React/Redux application dispalying data for people in industry.

## Usage

1. Run `npm install`
2. Run `npm start`

The application will be available at http://localhost:1234.

## Description

The data table is available at the `/table` endpoint. It shows all information available for people in the dataset. All data fields are properly formatted with sensible defaults where no information was available.

The table supports:
* Sorting by the properties specified in the task
* Pagination
* Setting number of results per page
* Searching by first or last name

The chart visualisations are available at `/charts`. There are 2 charts displaying different kind of information about the dataset.

The charts page consists of:
* A scatter chart showing the relation between years of experience and salary, as well as date of birth and salary. Based on a further analysis on the chart sections one can compare whether salary is more affected by the years spent in industry or the older a person is. It is expected that there is a correlation between the years in industry and age (the older you are, the more years of experience you are expected to have) - this would be observed if the distribution of the 2 datasets within the salary domain is similar. It would be surprising if there is no such correlation.

* A pie chart showing the top 10 industries which are represented within the sample dataset. That can give us information about how reliable future findigs are for the given industry. The bigger the sample size for a certain industry is, the higher the confidence we can have in our findings.

The scatter chart allows for enabling and disabling of datasets using a legend. The colors on the second chart are randomised each time the page is refreshed.

# Technologies used

The table component used is taken from [React Bootstrap](https://react-bootstrap.github.io/). The charts are from [Recharts](https://recharts.org/en-US/).

For Redux implementation a form of [Redux Toolkit](https://redux-toolkit.js.org/) was utilised.

For a code bundler [Parcel](https://parceljs.org/) is used. While I am more experienced with Webpack, I wanted to try out Parcel. That also allowed me to set up a React application from scratch, rather than using `create-react-app`.
