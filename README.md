# TODO

- alignment: bettersize matching (patchsize or other parameters instead of scaling image?)
- search range and png compression parameter as configurable parameters (instead of hardcoded as currently)
- consider internet archive bookreader
- memory management
- still jittering during load+scroll
- look for unnecessary useEffect usages
- turn off debug mode compilation flags
- more efficiont scroll position calc
- add loading state to reader so we can block scrolling and avoid overwriting stored position
- resume import if interrupted
- smaller subfolders for reduced memory footprint
- add support for various file formats (?? for rar, pdf, etc.)
- remove file formats other than png from opencv build
- service worker / PWA
- testing UI and additional e2e tests
- have wrap up function to match remaining backtrack stack
- better IDB handling for faster image loads
- avoid flashing on load before dim
- shut down worker after inactivity
- option to configure switching left/right mouse click behavior
- delete inputs after import is done
- solve useEffect dependency lint warnings, useCallback
- dropbox progress bar
- goto page option
- better mobile peeking
- check for existing collections when importing, regex rule for valid names
- dictionary overlay
  - https://github.com/eidoriantan/kanji.js
  - https://github.com/bryanjenningz/japanese-dictionary
  - https://github.com/asdfjkl/kanjicanvas
  - https://github.com/ZacharyRead/jlect-jhr
- use redux? effect? remeda?
- use react compiler
- use manual indexdDB management instead of wasm filesystem
- configurable peek radius
