export const projects = [
  {
    id: 'opus-melody',
    title: 'OpusMelody - Solo Startup',
    description: 'Generative music composition studio with free and paid features. Deployed with Angular, Flask, Python, Digital Ocean, Stripe, Postgres, Google Analytics. 260 unique users, 22 email signups and counting.',
    mainImage: '/screenshots/OpusMelody - 1.png',
    images: [
      '/screenshots/OpusMelody - 1.png',
      '/screenshots/OpusMelody - 2.png',
      '/screenshots/OpusMelody - 3.png'
    ],
    contribution: '',
    contributionHTML: `
        <div>
        <p><strong>OpusMelody</strong> is a digital audio workstation that allows the generation, editing, and export of MIDI compositions.</p>

        <p>We encode popular compositional approaches suggested by classical, jazz, pop, and hip hop lineages into procedural algorithms to create compositions matching user input, with some randomness sprinkled in.</p>

        <p>Built with Flask, Angular, and Python.</p>

        <h2>Generation Features and Compositional Algorithms</h2>

        <h4>Overview</h4>
        <ul>
            <li>Generate a wide variety of high-quality chord progressions with fine control over the progression specs</li>
            <li>Use tasteful voicings and dynamic harmonic rhythms just by selecting one of our generation presets</li>
            <li>Orchestrate your progressions using a large list of monophonic and polyphonic presets</li>
            <li>Large library of hit progressions and chord voicings with configurable probabilities determining their inclusion</li>
            <li>Configure probabilities for the inclusion of non-diatonic, borrowed, altered dominant chords</li>
            <li>Logging panel in UI provides step-by-step explanations of the result generation method</li>
            <li>Export MIDI files of the entire project's composition as a zip file of MIDI tracks</li>
            <li>Import individual MIDI tracks</li>
        </ul>

        <h4>Chord Generation + Selection Algorithms</h4>
        <ul>
            <li>Library-based voicing selection</li>
            <li>Build chords from random scale tones</li>
            <li>Note nudge algorithm: nudge notes of previous chord to get next chord (like human piano hands)</li>
            <li>Chord leading based on chord leading chart</li>
            <li>Circular chord leading for smooth progression loops</li>
            <li>Can voice user-supplied numeral sequences</li>
            <li>Customizable topline contour shape</li>
            <li>Can restrict all voicings to be sus chords</li>
            <li>Specify the contour shape of a generated chord progression's topline (static, downward, up and then down...)</li>
        </ul>

        <h4>Orchestrate Your Progressions</h4>
        <ul>
            <li>Two-voice counterpoint with focused chord tone selection (ex: top line and lower middle line)</li>
            <li>Three-voice and four-voice counterpoint algorithms, still rough but good enough to be dangerous</li>
            <li>Standard arpeggios that can be set to quarter note, eighth note, customize number of repetitions per chord</li>
            <li>Randomized spiral-shaped arpeggios</li>
            <li>And more monophonic arpeggio shapes that can serve as orchestration support</li>
            <li>Winding lead generation (creating flowing melodic lines)</li>
            <li>Symmetric motif generation (creating melodies that are repeated on the first and second halves of the progression using matching chord tones)</li>
        </ul>

        <h4>General App Features</h4>
        <ul>
            <li>Add tracks and edit notes in a resizable piano roll window</li>
            <li>Export application state to a MIDI file and download the generation log that explains the music theory behind the composition</li>
            <li>Import user-provided MIDI files for automated manipulation</li>
            <li>Quickly generate compositions with the Quick Generate button that reruns the last-applied settings and clicks play</li>
            <li>Chords can be rolled bottom-up during playback with a configurable note roll offset, to help you better hear each tone created</li>
            <li>UI automatically calculates and labels chords with their names and scale degrees</li>
            <li>Cycle mode toggle button for looped playback</li>
        </ul>
        </div>
    `,
    links: [
      { title: 'Technical Demo', href: 'https://youtu.be/-cH_U4N0nSw?si=U3xLxx2wcTod0K4W' },
      { title: 'Try OpusMelody', href: 'https://opusmelody.com' }
    ]
  },
  {
    id: 'daily-angel',
    title: 'Daily Angel - Solo Startup',
    mainImage: '/screenshots/Daily Angel - 1.png',
    images: [
      '/screenshots/Daily Angel - 1.png',
      '/screenshots/Daily Angel - 2.png',
      '/screenshots/Daily Angel - 3.png',
      '/screenshots/Daily Angel - 4.png',
    //   '/screenshots/Daily Angel - 5.png'
    ],
    contribution: "A personalized AI accountability coach that checks in with you over email 3 times a day to make sure you’re on track toward your goals.<br/><br/> Includes an RPG-style profile card that gamifies what you're working on. Deployed with React, Flask, Digital Ocean, OpenRouter, nginx, gunicorn, Stripe, SendGrid.",
    links: [
      { title: 'Daily Angel', href: 'https://dailyangel.me' },
    ]
  },
  {
    id: 'ctds',
    title: 'CTDS Data Portal - In a Team of 8',
    // description: 'A React data portal for visualizing patient data. Built for the Center for Translational Data Science at the University of Chicago. I contributed new filters and filter-sharing features to the dashboard while working in a team of 8.',
    mainImage: '/screenshots/CTDS - 1.png',
    images: [
      '/screenshots/CTDS - 1.png',
      '/screenshots/CTDS - 2.png'
    ],
    contribution: "A React data portal for visualizing patient data. Built for the Center for Translational Data Science at the University of Chicago. I contributed new filters and filter-sharing features to the dashboard while working in a team of 8.",
    links: [
        { title: 'View the site live', href: 'https://caninedc.org/' },
        { title: 'Center for Translational Data Science site', href: 'https://ctds.uchicago.edu/' }
    ],
    contributionHTML: `
      <div>
        <p>I developed React features to visualize, filter, export, and securely share virtual cohorts of patient data, expanding filter functionalities under the direction of PMs and bioinformaticians.</p>

        <p>UI upgrades I contributed:</p>
        
        <ul>
          <li>508-compliance (navigable tab order, focus-trapping modals for disability access)</li>
          <li>Index-scoped tiered-access security (permission-based views)</li>
          <li>Toggleable AND/OR checkbox combination modes</li>
          <li>URL-shareable filter state</li>
          <li>An export to workspace flow that mounts selected data in a Jupyter notebook</li>
        </ul>
        
        <p>The site shown above is just one of a fleet of parametrizable frontends my contributions affected.</p>
      </div>
    `,
  },
  {
    id: 'athena',
    title: 'BitQuick.co - as Lead Designer, Team of 3',
    mainImage: '/screenshots/Athena - 1.png',
    images: [
        '/screenshots/Athena - 1.png',
        '/screenshots/Athena - 2.png',
        '/screenshots/Athena - 3.png',
        '/screenshots/Athena - 4.png',
        '/screenshots/Athena - 5.png',
        '/screenshots/Athena - 6.png'
    ],
    contribution: 'At Athena Bitcoin, I served as lead designer and lead developer to redesign BitQuick.co, applying a flat design aesthetic, custom inputs and checkboxes with on-change side effects, and dynamic tools with smooth CSS transitions. <br/><br/>I completed this work in 2018. Bitquick.co is no longer live.',
    links: [
      { title: 'Athena Bitcoin company site', href: 'https://athenabitcoin.com/' },
    ]
  },
  {
    id: 'desert-adventure-z',
    title: 'Desert Adventure Z - Solo Project',
    description: 'A side-scrolling platformer built in React',
    mainImage: '/screenshots/Desert Adventure Z - 1.png',
    images: [
      '/screenshots/Desert Adventure Z - 1.png',
      '/screenshots/Desert Adventure Z - 2.png',
      '/screenshots/Desert Adventure Z - 3.png',
    ],
    contribution: 'A short desert adventure game written with React functional components. We shift sprite sheets rapidly to create the illusion of animation.',
    links: [
      { title: 'Video Demo', href: 'https://www.youtube.com/watch?v=aR_-RlabYJE' },
      { title: 'GitHub', href: 'https://github.com/ZakirG/desert-adventure-z' },
    ]
  },
  {
    id: 'graphing-calculator',
    title: 'Elm Graphing Calculator - Class Project, Team of 2',
    description: 'An interactive graphing calculator written in Elm',
    mainImage: '/screenshots/Graphing Calculator - 1.png',
    images: [
      '/screenshots/Graphing Calculator - 1.png'
    ],
    contribution: 'This was a class project meant to serve as practice for functional programming. I built the frontend and parts of the backend, working in a team of 2. <br/><br/>Using functional programming with Elm draw the interface was a quirky choice; no CSS was used in the project.',
    contributionHTML: `
        <ul>
          <li>A custom recursive parsing system that respects parentheses and the order of operations</li>
          <li>Binary arithmetic operators are supported: +, -, *, / , ^</li>
          <li>Graph mode toggle: when the "y=" string is shown in the INPUT panel, graph mode is toggled on; this means that the string in the INPUT panel will be graphed. Graph mode can either be toggled using the "y=" button or by including the variable x in the INPUT string.</li>
          <li>A range interval is shown below the button layout; the buttons to either side either zoom in or zoom out on the displayed graph. We cap the maximum range at (-17,17); we cap the minimum range at (-1,1).</li>
        </ul>
    `,
    links: [
      { title: 'Source Code', href: 'https://github.com/ZakirG/elm-graphing-calculator' }
    ]
  },
]; 