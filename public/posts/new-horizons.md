---
title: New Horizons
subtitle: "My First OSS Contribution"
date: 11/19/2020
id: 01
---

I built this website in early May without fully taking advantage of what React had to offer in making a maintainable codebase. As I continued building more features on the website, I've also added more [technical debt](https://en.wikipedia.org/wiki/Technical_debt), making the project much more difficult to work with then it needs to be.

So I began refactoring many parts of this website, particularly the project section on the landing page. I wanted to take advantage of the _children_ array that React injects into components, making it much easier to build composable components.

In the end, I ended up with a project section that began like this:

```javascript
      <div className="project-container">
        <div className="header-field p20 f54" data-aos="fade-down">
          <h1>Anonymous Message Service</h1>
          <a href="http://messagebottle.netlify.app">
            <img
              src="web-link.svg"
              alt="Link"
              className="icon-sm link-outside"
            />
          </a>
          <p>May 2020</p>
        </div>
        <div
          className="content-field"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a href="https://messagebottle.netlify.app">
            <img
              src="Message.PNG"
              alt="FakeImage"
              className="image-container"
              id="image-source"
            />
          </a>
          <div className="copy-text" data-aos="fade-down" data-aos-delay="650">
            <div className="text-blurb f18 l40">
              <p>
                Titled, "Message In A Bottle", this web application allows
                anyone to submit a message and allows anyone to read a message
                submitted.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Technology Used</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>AWS Lambda</li>
                <li>Netlify</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
```

To this:

```javascript
<Project github={`https://github.com/thescripted/message-bottle-client`}>
	<Header link={`http://messagebottle.netlify.app`} date={`May 2020`}>
		Anonymous Message Service
	</Header>
	<Image link={`http://messagebottle.netlify.app`} alt="Message In A Bottle Application" source="Message.PNG" />
	<Content>
		Titled, "Message In A Bottle", this web application allows anyone to submit a message and allows anyone to read
		a message submitted.
	</Content>
	<TechStack>
		<TechItem>Node</TechItem>
		<TechItem>MongoDB</TechItem>
		<TechItem>Mongoose</TechItem>
		<TechItem>Netlify</TechItem>
	</TechStack>
</Project>
```

Writing composable components in this way is not a new thing; many tags in HTML are built in a composable way:

```html
<table>
	<tr align="center">
		<th>Name</th>
		<th>Cups</th>
		<th>Type of Coffee</th>
		<th>Sugar</th>
	</tr>
	<tr>
		<td align="Left">Ben</td>
		<td align="Left">10</td>
		<td align="Left">Espresso</td>
		<td align="Left">No</td>
	</tr>
</table>
```

Material UI framework structures many of their components in a similar way, and the React documentation prefers [compositions over inheritance](https://reactjs.org/docs/composition-vs-inheritance.html).

Taking advantage of composable components allows your code to be more modular, reduce component nesting and prop drilling, and increases the flexibility of your React application.

For example, I can add a layout property to the _Project_ section, that will render the page in a different structure with a _formatLeft = true_ property.

```javascript
// Project.js
function Project({ children, github, left }) {
  return formatLeft ? (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>{children[0]}</div> {/* Header */}
      <div className={styles.main}>
        <div className={styles.imagecontainer}>
          {children[1]} {/* Image */}
          <h3 className={styles.repository}>
            <a href={github}>Link to Repository</a>
          </h3>
        </div>
        <div className={styles.copy}>
          <div className={styles.contentcontainer}>
            {children[2]} {/* Content */}
          </div>
          {children[3]} {/* TechStack */}
        </div>
      </div>
    </div>
  ) : (/*... Implement Left Section*/)
}

```

Project will then render a new styling and layout structure under the hood, all done with just one property assignment.

Abstracting away implementation details allows developers to streamline coding processes when building larger and larger applications. Personally, I enjoy updating my website _way_ more now than before, and will continue to refactor more of my past mistakes.

Thanks for Reading.

_Ben_
