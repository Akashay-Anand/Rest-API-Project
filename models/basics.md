# Description od database concept

## modules used

> validator : provide function to perform validation task
> slugify : 
<!-- > geoCoder : helps to pick location -->


## Parameters of schema

> maxlength // size of the input
> 
> trim // trim out extra space from string.
>
> type // data type of that entry


## Slug and Slugify

> **URL slug** is a component of a URL (Uniform Resource Locator) that represents a human-readable, descriptive version of a webpage's title or content. URL slugs are used to make web addresses more user-friendly and meaningful.

- example
```bash 
https://www.example.com/blog/how-to-create-a-web-page

# In this URL, "how-to-create-a-web-page" is the URL slug. It provides a clear and concise indication of the content of the web page, which is likely an article or blog post about creating web pages.


URL slugs have several benefits:

Readability: They make the URL more human-readable and understandable, which can improve the user experience.

SEO (Search Engine Optimization): Search engines may use the keywords in the URL slug to understand the content of the page better, potentially improving search engine rankings.

Consistency: URL slugs can help maintain a consistent structure for URLs across a website, making it easier to organize and manage content.

Accessibility: Simplified, hyphen-separated slugs are easier to share verbally or in print.

```

> **Slugify** is process of transforming a string, typically a title or a piece of text, into a format suitable for use in a URL slug. The purpose of slugifying a string is to create a URL-friendly version of it by removing spaces, special characters, and diacritics, and converting the text to lowercase.


## Aggregation 
- https://www.mongodb.com/docs/manual/aggregation/

> Aggregation refers to the process of collecting and summarizing data or information from multiple sources into a single representation. It is commonly used in various fields, including data analysis, statistics, and database management. 

> The goal of aggregation is to condense and simplify data while preserving essential information for analysis or reporting purposes. 

> MongoDB provides a powerful aggregation framework that allows you to process and manipulate data in various ways, including filtering, grouping, sorting, and performing complex calculations. It is a flexible and expressive way to query and analyze data within MongoDB.

> Common stages include $match, $group, $sort, $project, $unwind, and more.

