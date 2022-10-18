import loadSidebarElements from "../index/sidebar.js"
import loadFromLink from '../index/loadFromLink.js'

loadSidebarElements([
    {file:'sidebar/js_notes.json', selector:'#jsNotes'},
    // {file:'sidebar/js.json', selector:'#jsSidebar'},
    // {file:'sidebar/other.json', selector:'#referenceSidebar'},
    // {file:'sidebar/usefulConcepts.json', selector:'#usefulConcepts'},
])


loadFromLink("js_notes/start/index")