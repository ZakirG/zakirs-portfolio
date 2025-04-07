export const projects = [
  {
    id: 'opus-melody',
    title: 'OpusMelody - Solo Startup',
    description: 'Solo project. Generative music composition studio with free and paid features. Deployed with Angular, Flask, Python, Digital Ocean, Stripe, Postgres, Google Analytics.',
    mainImage: '/screenshots/OpusMelody - 1.png',
    images: [
      '/screenshots/OpusMelody - 1.png',
      '/screenshots/OpusMelody - 2.png',
      '/screenshots/OpusMelody - 3.png'
    ],
    contribution: '',
    contributionHTML: `
        <div>
        <p><strong>GenerativeDAW</strong> is a digital audio workstation that allows the generation, editing, and export of MIDI compositions.</p>

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
      { title: 'Video Demo', href: 'https://www.youtube.com/watch?v=Z2GSPQuNvfk&ab_channel=Zaqir' },
      { title: 'Visit OpusMelody', href: 'https://opusmelody.com' }
    ]
  },
  {
    id: 'daily-angel',
    title: 'Daily Angel - Solo Startup',
    description: 'AI-powered daily emotional companion app',
    mainImage: '/screenshots/Daily Angel - 1.png',
    images: [
      '/screenshots/Daily Angel - 1.png',
      '/screenshots/Daily Angel - 2.png',
      '/screenshots/Daily Angel - 3.png',
      '/screenshots/Daily Angel - 4.png',
      '/screenshots/Daily Angel - 5.png'
    ],
    contribution: 'Developed a comprehensive mobile-first web application that serves as an AI emotional companion. Users receive daily angel messages tailored to their emotional state and personal journey.',
    links: [
      { title: 'Video Demo', href: 'dailyangel.me' },
      { title: 'Daily Angel', href: 'dailyangel.me' },
    ]
  },
  {
    id: 'ctds',
    title: 'CTDS Data Portal - In a Team of 8',
    description: 'A comprehensive data visualization dashboard',
    mainImage: '/screenshots/CTDS - 1.png',
    images: [
      '/screenshots/CTDS - 1.png',
      '/screenshots/CTDS - 2.png'
    ],
    contribution: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    links: [
      { title: 'CTDS Website', href: 'https://ctds.uchicago.edu' },
      { title: 'Project Documentation', href: 'https://ctds.uchicago.edu/docs' }
    ]
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
    contribution: 'I served as lead designer and lead developer to redesign BitQuick.co, applying a flat design aesthetic, custom inputs and checkboxes with on-change side effects, and dynamic tools with smooth CSS transitions.',
    links: [
      { title: 'Visit BitQuick', href: 'https://bitquick.co' },
      { title: 'GitHub Repository', href: 'https://github.com/bitquick' }
    ]
  },
  {
    id: 'desert-adventure-z',
    title: 'Desert Adventure Z - Solo Project',
    description: 'A side-scrolling platformer built in React',
    mainImage: '/screenshots/Desert Adventure Z - 1.png',
    images: [
      '/screenshots/Desert Adventure Z - 1.png',
    ],
    contribution: 'A short desert adventure game written with React functional components. We shift sprite sheets rapidly to create the illusion of animation. <br/><br/>Instructions: Move the character with the arrow keys. Press the up arrow to jump. Defeat enemies by jumping on them. Collect coins.',
    links: [
      { title: 'Video Demo', href: 'https://www.youtube.com/watch?v=aR_-RlabYJE' },
      { title: 'GitHub', href: 'https://github.com/ZakirG/desert-adventure-z' },
    ]
  },
  {
    id: 'graphing-calculator',
    title: 'Elm Graphing Calculator - Class Project, Team of 2',
    description: 'Built in team of 2. An interactive graphing calculator with real-time visualization',
    mainImage: '/screenshots/Graphing Calculator - 1.png',
    images: [
      '/screenshots/Graphing Calculator - 1.png'
    ],
    contribution: 'I built the frontend and parts of the backend using functional programming in Elm as part of a class project. Benjamin Rohrer built parts of the backend.',
    links: [
      { title: 'Try Calculator', href: 'https://elm-calculator.example.com' },
      { title: 'Source Code', href: 'https://github.com/zakirgowani/elm-calculator' }
    ]
  },
]; 