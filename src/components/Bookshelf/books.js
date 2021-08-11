import React from "react"
//Help — book API, where r u? GoogleBooks? wip
//Summaries and images from goodreads.com

const books = [
  {
    title: "Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators",
    author: "Ronan Farrow",
    finished: false,
    inProgress: true,
    tags: ["non-fiction", "true crime"],
    genre: "true crime",
    audiobook: true,
    isFiction: false,
    goodreadsUrl: "https://www.goodreads.com/book/show/46650277-catch-and-kill",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570798239l/46650277._SY475_.jpg",
  },
  {
    title: "The Infographic History of the World",
    author: "Valentina D'Efilippo, James Ball",
    finished: false,
    inProgress: true,
    tags: ["non-fiction", "history"],
    genre: "history",
    isFiction: false,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/18107896-the-infographic-history-of-the-world",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419340351l/18107896.jpg",
    summary: (
      <div>
        <p>The History of the World, but not as you know it.</p>
        <p>
          A new type of history is here – all 13.8 billion years of it, exploded
          into a visually jaw-dropping feast of facts, trends and timelines that
          tell you everything you’d ever want to know about the history of the
          world.
        </p>
        <p>
          From the primordial soup to the technological revolution of the 21st
          century, interesting stuff has been going on; and ever since
          prehistoric man scratched the first tally markings into a damp cave
          wall, we’ve been counting and measuring it all.
        </p>
        <p>
          Which historic warriors conquered the most territory, killed the most
          people, or had the largest empire? When did everything evolve? Which
          languages are related to which? What’s been invented and when? Where
          are we being born, and what are we dying of? Which countries are
          eating all the food, causing all the pollution and taking all the
          drugs?
        </p>
        <p>
          A story of civilisation and barbarism, of war and peace, this is
          history done in a new way – a beautifully designed collection of the
          most insightful and revealing trends that tell us what the human race
          has been up to, and where we’re heading.
        </p>
      </div>
    ),
  },
  {
    title: "Show Me the Numbers: Designing Tables and Graphs to Enlighten",
    author: "Stephen Few",
    finished: false,
    inProgress: true,
    tags: ["non-fiction", "technology"],
    genre: "technology",
    isFiction: false,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/543936.Show_Me_the_Numbers?from_search=true&qid=oh4cRBMmJu&rank=1",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328862683l/543936.jpg",
    summary: (
      <div>
        <p>
          Tables and graphs can more adequately communicate important business
          information when they reflect the good design practices discussed in
          this practical guide to effective table and graph design. Information
          is provided on the fundamental concepts of table and graph design, the
          numbers and knowledge most suitable for display in a graphic form, the
          best tabular means to communicate certain ideas, and the
          component-level aspects of design. Analysts, technicians, and managers
          will appreciate the solid theory behind this outline for ensuring that
          tables and graphs present quantitative business information in a
          truthful, attractive format that facilitates better decision making.
        </p>
      </div>
    ),
  },
  {
    title:
      "The Panama Papers: Breaking the Story of How the Rich and Powerful Hide Their Money",
    author: "Frederik Obermaier, Bastian Obermayer",
    finished: true,
    audiobook: true,
    inProgress: false,
    tags: ["non-fiction", "politics"],
    genre: "politics",
    isFiction: false,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/48673776-the-panama-papers",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572793196l/48673776._SY475_.jpg",
    summary: (
      <div>
        <p>
          From the winners of the 2017 Pulitzer Prize for Explanatory Reporting.
        </p>
        <p>
          11.5 million documents sent through encrypted channels. The secret
          records of 214,000 offshore companies. The largest data leak in
          history.
        </p>
        <p>
          In early 2015, an anonymous whistle-blower led investigative
          journalists Bastian Obermayer and Frederik Obermaier into the shadow
          economy where the super-rich hide billions of dollars in complex
          financial networks. Thus began the ground-breaking investigation that
          saw an international team of 400 journalists work in secret for a year
          to uncover cases involving heads of state, politicians, businessmen,
          big banks, the mafia, diamond miners, art dealers and celebrities. A
          real-life thriller, <i>The Panama Papers</i> is the gripping account
          of how the story of the century was exposed to the world.
        </p>
      </div>
    ),
  },
]

export default books
