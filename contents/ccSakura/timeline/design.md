# /ccSakura/timeline design
## Structure
- core
    - 01
        - clear01.html
        - timeline.js
    - 02
        - Same as above
    - ...
- css
    - graph.css
- js
    - Chart.min.js
    - palette.js
    - timeline-core.js
- doc
    - 01.md
    - 02.md
    - ...

### Description
主にtimeline.jsについてです。
timeline.jsに書かれるのは、基本的に各話の時間・シーンを格納した配列です。
パースしてChartやpaletteに通してcanvasに起こすのはtimeline-core.jsの役割です。
