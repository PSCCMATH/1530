var app = angular.module("jumpPage", []);
app.controller("myCtrl", function ($scope) {
  let type = ['Prepare','Learn','Practice','Check','Resources']; //define resource type
  let icon = ['fa-play', 'fa-book', 'fa-gears', 'fa-pencil', 'fa-calculator']; //define icons
  let media =['video', 'reading', 'audio', 'calculator', 'notes']

  $scope.jumppage = {
  "pageTitle": "Math 1530 Jump Page",
  "units": [
    {
      "title": "Descriptive Statistics", //required unit title
      "topics": [
        {
          "title": "1.1 Statistical Literacy", //required topic title
          "objectives": [
            {
              "title": "1.1a Basic Concepts of Statistics and Statistical Thinking", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Some Statisical Vocabulary", //required button text 
                  "url": "http://bobhall.tamu.edu/FiniteMath/Module8/Introduction.html", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  //"time": "10:30", // optional - completion time
                  "tags": ['vocabulary', 'reading']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add another objective
            {
              "title": "1.1b Types of Data", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Levels of Measurement", //required button text 
                  "url": "https://www.youtube.com/watch?v=ax2s_AEMu7o", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "11:40", // optional - completion time
                  "tags": ['sampling', 'simple random sample', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            },// end of an objective - add a comma here to add another objective
            {
              "title": "1.1c Sampling Methods", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Types of Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=be9e-Q-jC-0", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "4:53", // optional - completion time
                  "tags": ['sampling', 'simple random sample', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Cluster Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=QOxXy-I6ogs", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "3:17", // optional - completion time
                  "tags": ['sampling', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Stratified Sampling", //required button text 
                  "url": "https://www.youtube.com/watch?v=sYRUYJYOpG0", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:29", // optional - completion time
                  "tags": ['sampling', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sampling Demonstration", //required button text 
                  "url": "http://onlinestatbook.com/2/introduction/sampling_demo.html", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  //"time": "5:29", // optional - completion time
                  "tags": ['sampling', 'activity']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            },// end of an objective - add a comma here to add another objective
            {
              "title": "1.1d Types of Studies", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.1e Bias and Distortion in Statistics", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.2 Summarizing and Graphing Data", //required topic title
          "objectives": [
            {
              "title": "1.2a Construct a Frequency Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Creating a Frequency Distribution", //required button text 
                  "url": "https://youtu.be/4hCZTkWUeZ8", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "8:18", // optional - completion time
                  "tags": ['frequency distribution', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2b Graph a Frequency Distribution as a Histogram", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2c Construct a Dotplot", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.2d Construct a Stem-and-leaf Plot", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.3 Measures of Center", //required topic title
          "objectives": [
            {
              "title": "1.3a Find the Mean of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3b Find the Median of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3c Find the Mode of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3d Find the Midrange of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.3e Estimate the Mean of a Frequency Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.4 Measures of Variation", //required topic title
          "objectives": [
            {
              "title": "1.4a Find the Range of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.4b Find the Variance and Standard Deviation of a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.4c Estimate the Standard Deviation of a Frequency Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "1.5 Measures of Relative Standing", //required topic title
          "objectives": [
            {
              "title": "1.5a Find a Specific Percentile for a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.5b Find the Five Number Summary for a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "1.5c Construct a Boxplot and Modified Boxplot for a Dataset", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Discrete Probability Distributions", //required unit title
      "topics": [
        {
          "title": "2.1 Fundamentals of Probability", //required topic title
          "objectives": [
            {
              "title": "2.1a Understand Properties of Probabilities", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.1b Solve Basic Probability Problems", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.1c Use Probability Rules for Complementary Events", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.2 The Addition Rule", //required topic title
          "objectives": [
            {
              "title": "2.2a Identify Sets of Disjoint Events", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.2b Apply the Addition Rule", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.2c Apply the Addition Rule to a Contingency Table", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.3 Conditional Probability and the Multiplication Rule", //required topic title
          "objectives": [
            {
              "title": "2.3a Apply the Multiplication Rule to Independent Events", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.3b Apply the Multiplication Rule to Dependent Events", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.3c Apply the Multiplication Rule to a Contingency Table", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.4 Random Variables and Discrete Probability Distributions", //required topic title
          "objectives": [
            {
              "title": "2.4a Identify Discrete Probability Distributions and Their Random Variables", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.4b Find Probabilities Using a Discrete Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.4c Determine the Mean, Variance, and Standard Deviation of a Discrete Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "2.5 Binomial Probability Distributions", //required topic title
          "objectives": [
            {
              "title": "2.5a Identify Binomial Probability Distributions and Their Random Variables", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.5b Find Probabilities Using a Binomial Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "2.5c Determine the Mean, Variance, and Standard Deviation of a Binomial Probability Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
     {
      "title": "Normal Probability Distributions", //required unit title
      "topics": [
        {
          "title": "3.1 Introduction to Continuous Distributions", //required topic title
          "objectives": [
            {
              "title": "3.1a Continuous Distributions and Random Variables", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.1b Find Probabilities for a Uniform Distribution", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.1c Apply the Empirical Rule to Normal Distributions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Standard Normal Distribution", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:KgL8DwG_@5/The-Standard-Normal-Distributi", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link

              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.1d Find and Interpret z-scores", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to calculate a z-score", //required 
                  "url": "https://youtu.be/QgCXKzyqtMQ", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.1e Apply the Range Rule to Find Probabilities", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.2 Probabilities for Normal Distributions", //required topic title
          "objectives": [
            {
              "title": "3.2a Use z-scores to Find Probabilities", //optional objective title
              "links": [
                 {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Standard Normal Distribution on Statdisk", //required 
                  "url": "http://help.statdisk.org/normaldistribution", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'statdisk', 'reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to find a z-score from a known area", //required 
                  "url": "https://youtu.be/ub08vYfa8zo", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'statdisk', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2a Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[4], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Standard Normal Distribution Calculator", //required 
                  "url": "https://bellecurve.github.io/math1530/apps/", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[3], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'z-score', 'calculator']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2b Find the Value of a Normal Random Variable From Probability", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the Normal Distribution", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:InewwncA@9/Using-the-Normal-Distribution", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'probability', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "How to Calculate z-scores", //required 
                  "url": "https://youtu.be/HCrYy1vNtHI", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'probability', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2b Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Find Normal Distribution Areas", //required 
                  "url": "https://youtu.be/uik8kLOh2_M", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "1:57", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'statdisk', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the TI-84 to Find Normal Probability", //required 
                  "url": "https://youtu.be/HKzZwX7oeDM", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "5:15", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'calculator', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Distribution Practice Problems", //required 
                  "url": "https://youtu.be/-hyuDHGb9Ec", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "14:38", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Drawings to Solve Normal Distribution Problems", //required 
                  "url": "https://youtu.be/72ZZq30Dq2g", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:45", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Normal Distributions Lecture from OpenStax Author", //required 
                  "url": "https://youtu.be/OqorvQXzemY", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "26:32", // optional - completion time
                  "tags": ['normal distribution', 'z-score', 'video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.2c Use the Central Limit Theorem to Calculate Probabilities", //optional objective title
              "links": [
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction to the Central Limit Theorem", //required 
                  "url": "https://youtu.be/Pujol1yC1_A", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:13", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[3], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Section 3.2c Notes", //required 
                  "url": "http://google.com", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[4], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['standard normal distribution', 'notes' ]//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Statistics How To: Central Limit Theorem", //required 
                  "url": "http://www.statisticshowto.com/central-limit-theorem-examples/", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "The Central Limit Theorem for Sample Means", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:w5Utw7bZ@9/The-Central-Limit-Theorem-for-", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using the Central Limit Theorem", //required 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:RcP25R6r@9/Using-the-Central-Limit-Theorem", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','reading']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Central Limit Theorem", //required 
                  "url": "https://youtu.be/JNm3M9cqWyc", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "9:48", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video', 'khan academy']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Sampling Distribution of the Sample Mean", //required 
                  "url": "https://youtu.be/FXZ2O1Lv-KE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:51", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video', 'khan academy']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Central Limit Theorem with OpenStax Author", //required 
                  "url": "https://youtu.be/qZFDvprWLN0", //required
                  "type": type[4], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "26:03", // optional - completion time
                  "tags": ['central limit theorem', 'normal distribution','video']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.3 Confidence Intervals: Proportions", //required topic title
          "objectives": [
            {
              "title": "3.3a Construct a Confidence Interval for a Population Proportion", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Introduction", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:lWGQ0U41@6/Introduction", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Population Proportion", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:QNwpYJrT@9/A-Population-Proportion", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct a Confidence Interval Estimate of p", //required button text 
                  "url": "https://youtu.be/A-WooCS22oE", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'video', 'statdisk']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.3b Calculate Minimum Sample Size for Proportion", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.3c Find Point-estimate and Margin of Error", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Population Proportion", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:QNwpYJrT@9/A-Population-Proportion", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Place of Birth)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:lKLWkGMZ@2/Confidence-Interval-Place-of-B", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population proportion', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "3.4 Confidence Intervals: Means", //required topic title
          "objectives": [
            {
              "title": "3.4a Construct a Confidence Interval for a Population Mean", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Single Population Mean using the Normal Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:H9wp31Fq@9/A-Single-Population-Mean-using", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "A Single Population Mean using the Student t-Distribution", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:_aFwJFdw@11/A-Single-Population-Mean-using", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[0], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Using Statdisk to Construct a Confidence Interval Estimate of Mean", //required button text 
                  "url": "https://youtu.be/WxBw7qznMvog", //required
                  "type": type[1], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Home Costs)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:4TpOoBvT@2/Confidence-Interval-Home-Costs", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                }, // end of link object - add a comma to add another link
                {
                  "icon": icon[2], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Confidence Interval (Women's Heights)", //required button text 
                  "url": "https://cnx.org/contents/MBiUQmmY@18.54:Gp27KShG@1/Confidence-Interval-Womens-Hei", //required
                  "type": type[2], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[1], // required - refers to array above - first value is media[0] - no quotes
                  "time": "", // optional - completion time
                  "tags": ['confidence intervals', 'population mean', 'webpage']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "3.4b Calculate Minimum Sample Size for Mean", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    }, // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
    {
      "title": "Hypothesis Testing and Inference", //required unit title
      "topics": [
        {
          "title": "4.1 Hypothesis Tests: Introduction", //required topic title
          "objectives": [
            {
              "title": "4.1a Identify the Steps in a P-value Hypothesis Test", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.1b Translate Text Claim into Null and Alternative Hypotheses", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.2 Hypothesis Tests: Proportions", //required topic title
          "objectives": [
            {
              "title": "4.2a Calculate Test Statistic to Test a Claim About a Proportion", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.2b Use P-value to Evaluate Null Hypothesis for the Test", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.2c Formulate Conclusion About the Original Claim", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.2d Explore Use of Confidence Intervals to Test a Claim", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.3 Hypothesis Tests: Means", //required topic title
          "objectives": [
            {
              "title": "4.3a Calculate Test Statistic to Test a Claim About a Mean", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.3b Use P-value to Evaluate Null Hypothesis for the Test", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.3c Formulate Conclusion About the Original Claim", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.4 Hypothesis Tests: Standard Deviations", //required topic title
          "objectives": [
            {
              "title": "4.4a Calculate Test Statistic to Test a Claim About a Standard Deviation", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.4b Use P-value to Evaluate Null Hypothesis for the Test", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.4c Formulate Conclusion About the Original Claim", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.5 Linear Correlation and Regression", //required topic title
          "objectives": [
            {
              "title": "4.5a Construct a Scatterplot for a Dataset of Ordered Pairs", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.5b Evaluate Whether a Significant Linear Correlation Exists in a Set of Ordered Pairs", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.5c Find the Linear Regression Equation for a Set of Ordered Pairs", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.5d Determine When to Use the Linear Regression for Predictions", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
                {
          "title": "4.6 Goodness of Fit", //required topic title
          "objectives": [
            {
              "title": "4.6a Test the Goodness of Fit for a Multinomial Distribution with Equal Expected Values", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array            
            }, // end of an objective - add a comma here to add anohter objective
            {
              "title": "4.6b Test the Goodness of Fit for a Multinomial Distribution with Unequal Expected Values", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array            
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        }, // end of topic object - add a comma here to add another topic
        {
          "title": "4.7 Test for Independence", //required topic title
          "objectives": [
            {
              "title": "4.7a Test a Hypothesis About Independence of Variables in Contingency Tables", //optional objective title
              "links": [
                {
                  "icon": icon[1], // required - refers to array above - first value is icon[0] - no quotes
                  "class": "", //required but can be blank - for extra css styling
                  "text": "Something about distribution", //required button text 
                  "url": "https://yahoo.com", //required
                  "type": type[0], // required - refers to array above - first value is type[0] - no quotes
                  "media": media[0], // required - refers to array above - first value is media[0] - no quotes
                  "time": "10:30", // optional - completion time
                  "tags": ['khan academy', 'z-values']//optional tags
                } // end of link object - add a comma to add another link
              ] // end of links array
            } // end of an objective - add a comma here to add anohter objective
          ] // end of objectives array
        } // end of topic object - add a comma here to add another topic
      ] // end of topics array
    } // end of unit object - add a comma to add another unit // end of unit object - add a comma to add another unit
  ] // end of units array
} // end of JSON object

 
});

// Converts tag array into comma separated list
app.filter('join', function () {
    return function join(array, separator, prop) {
        if (!Array.isArray(array)) {
            return array; 
        }

        return (!!prop ? array.map(function (item) {
            return item[prop];
        }) : array).join(separator);
    };
});
