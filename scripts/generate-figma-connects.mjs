#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join } from 'path'

const ICONS_DIR = join(process.cwd(), 'src/icons')
const FILE_KEY = 'PANnuPSeOJ5BkW3XDyt2RG'

function toPascalCase(str) {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

// Same categories as fetch-icons.mjs
const categories = {
  "Accessibility": [
    {"id": "6001:10156", "name": "closed-captioning"},
    {"id": "6001:10157", "name": "question-circle"},
    {"id": "6001:10158", "name": "wheelchair"},
    {"id": "6001:10155", "name": "closed-captioning-outline"},
    {"id": "6001:10159", "name": "question-circle-outline"},
    {"id": "6001:10154", "name": "deaf"},
    {"id": "6001:10160", "name": "sign-language"},
    {"id": "6001:10153", "name": "low-vision"},
    {"id": "6001:10161", "name": "tty"},
    {"id": "6001:10152", "name": "phone-volume"},
    {"id": "6001:10162", "name": "universal-access"},
    {"id": "6001:10146", "name": "american-sign-language-interpreting"},
    {"id": "6001:10148", "name": "assistive-listening-systems"},
    {"id": "6001:10149", "name": "audio-description"},
    {"id": "6001:10150", "name": "blind"},
    {"id": "6001:10151", "name": "braille"}
  ],
  "Interfaces": [
    {"id": "6083:4", "name": "bars"},
    {"id": "6016:2102", "name": "ban"},
    {"id": "6016:2103", "name": "bars-alt"},
    {"id": "6016:2104", "name": "bullseye"},
    {"id": "6016:2105", "name": "check"},
    {"id": "6016:2106", "name": "check-circle"},
    {"id": "6016:2111", "name": "check-circle-outline"},
    {"id": "6016:2110", "name": "check-square"},
    {"id": "6016:2109", "name": "check-square-outline"},
    {"id": "6016:2108", "name": "cloud"},
    {"id": "6016:2107", "name": "close-icon"},
    {"id": "6016:2112", "name": "cog"},
    {"id": "6016:2113", "name": "cogs"},
    {"id": "6016:2114", "name": "database"},
    {"id": "6016:2115", "name": "dot-circle"},
    {"id": "6016:2116", "name": "dot-circle-outline"},
    {"id": "6016:2121", "name": "ellipsis-horizontal"},
    {"id": "6016:2120", "name": "ellipsis-vertical"},
    {"id": "6016:2119", "name": "frown"},
    {"id": "6016:2118", "name": "frown-outline"},
    {"id": "6016:2117", "name": "hashtag"},
    {"id": "6016:2122", "name": "heart"},
    {"id": "6016:2131", "name": "meh"},
    {"id": "6016:2132", "name": "share"},
    {"id": "6016:2141", "name": "smile-outline"},
    {"id": "6016:2142", "name": "times"},
    {"id": "6016:2123", "name": "heart-outline"},
    {"id": "6016:2130", "name": "meh-outline"},
    {"id": "6016:2133", "name": "share-alternate-square"},
    {"id": "6016:2140", "name": "star"},
    {"id": "6016:2143", "name": "trash"},
    {"id": "6016:2124", "name": "history"},
    {"id": "6016:2129", "name": "search"},
    {"id": "6016:2134", "name": "signal"},
    {"id": "6016:2139", "name": "star-outline"},
    {"id": "6016:2144", "name": "trash-alternate"},
    {"id": "6016:2125", "name": "home"},
    {"id": "6016:2128", "name": "search-minus"},
    {"id": "6016:2135", "name": "sliders-horizontal"},
    {"id": "6016:2138", "name": "star-half"},
    {"id": "6016:2145", "name": "trash-alternate-outline"},
    {"id": "6016:2126", "name": "magic"},
    {"id": "6016:2127", "name": "search-plus"},
    {"id": "6016:2136", "name": "smile"},
    {"id": "6016:2137", "name": "star-half-outline"},
    {"id": "6016:2146", "name": "x-icon"}
  ],
  "Maps": [
    {"id": "6030:65", "name": "anchor"}, {"id": "6030:68", "name": "beer"}, {"id": "6030:71", "name": "binoculars"},
    {"id": "6031:74", "name": "bolt"}, {"id": "6033:390", "name": "bomb"}, {"id": "6033:334", "name": "crosshairs"},
    {"id": "6033:335", "name": "fire"}, {"id": "6033:336", "name": "flag"}, {"id": "6033:337", "name": "flag-outline"},
    {"id": "6033:333", "name": "flag-checkered"}, {"id": "6033:348", "name": "flask"}, {"id": "6033:349", "name": "gamepad"},
    {"id": "6033:350", "name": "gavel"}, {"id": "6033:351", "name": "glass-martini"}, {"id": "6033:352", "name": "globe"},
    {"id": "6033:120", "name": "graduation-cap"}, {"id": "6033:361", "name": "leaf"}, {"id": "6033:362", "name": "lemon"},
    {"id": "6033:363", "name": "lemon-outline"}, {"id": "6033:364", "name": "life-ring"}, {"id": "6033:365", "name": "life-ring-outline"},
    {"id": "6033:369", "name": "lightbulb"}, {"id": "6033:368", "name": "lightbulb-outline"}, {"id": "6033:367", "name": "magnet"},
    {"id": "6033:366", "name": "map"}, {"id": "6038:8", "name": "map-outline"}, {"id": "6033:371", "name": "map-marker"},
    {"id": "6033:372", "name": "map-marker-alternate"}, {"id": "6033:373", "name": "map-pin"}, {"id": "6033:374", "name": "map-signs"},
    {"id": "6033:376", "name": "medkit"}, {"id": "6033:375", "name": "paw"}, {"id": "6033:377", "name": "plug"},
    {"id": "6033:378", "name": "road"}, {"id": "6033:379", "name": "shower"}, {"id": "6033:384", "name": "street-view"},
    {"id": "6033:383", "name": "ticket-alternate"}, {"id": "6033:381", "name": "tree"}, {"id": "6033:380", "name": "umbrella"},
    {"id": "6033:382", "name": "university"}, {"id": "6033:385", "name": "utensil-spoon"}, {"id": "6033:386", "name": "utensils"},
    {"id": "6033:387", "name": "wrench"}
  ],
  "Status": [
    {"id": "6012:1011", "name": "battery-three-quarters"}, {"id": "6012:1012", "name": "battery-empty"},
    {"id": "6012:1013", "name": "battery-full"}, {"id": "6012:1014", "name": "battery-half"},
    {"id": "6012:1015", "name": "battery-quarter"}, {"id": "6012:1020", "name": "exclamation-circle"},
    {"id": "6012:1019", "name": "exclamation-triangle"}, {"id": "6012:1018", "name": "exclamation"},
    {"id": "6012:1017", "name": "info"}, {"id": "6012:1016", "name": "info-circle"},
    {"id": "6012:1021", "name": "lock"}, {"id": "6012:1022", "name": "lock-open"},
    {"id": "6012:1023", "name": "minus"}, {"id": "6012:1024", "name": "minus-circle"},
    {"id": "6012:1025", "name": "minus-square"}, {"id": "6012:1030", "name": "minus-square-outline"},
    {"id": "6012:1029", "name": "plus"}, {"id": "6012:1028", "name": "plus-circle"},
    {"id": "6012:1027", "name": "plus-square"}, {"id": "6012:1026", "name": "plus-square-outline"},
    {"id": "6012:1031", "name": "question"}, {"id": "6012:1032", "name": "thermometer-half"},
    {"id": "6012:1033", "name": "unlock"}, {"id": "6012:1042", "name": "question-circle"},
    {"id": "6012:1035", "name": "thermometer-quarter"}, {"id": "6012:1034", "name": "unlock-alternate"},
    {"id": "6012:1041", "name": "question-circle-outline"}, {"id": "6012:1036", "name": "thermometer-three-quarters"},
    {"id": "6012:1040", "name": "thermometer-empty"}, {"id": "6012:1037", "name": "toggle-off"},
    {"id": "6012:1039", "name": "thermometer-full"}, {"id": "6012:1038", "name": "toggle-on"}
  ],
  "HandsGestures": [
    {"id": "6032:71", "name": "hand-lizard"}, {"id": "6032:74", "name": "hand-lizard-outline"},
    {"id": "6032:77", "name": "hand-paper"}, {"id": "6032:80", "name": "hand-paper-outline"},
    {"id": "6032:83", "name": "hand-peace"}, {"id": "6032:86", "name": "hand-peace-outline"},
    {"id": "6032:89", "name": "hand-rock"}, {"id": "6032:92", "name": "hand-rock-outline"},
    {"id": "6032:95", "name": "hand-scissors"}, {"id": "6032:98", "name": "hand-scissors-outline"},
    {"id": "6032:101", "name": "hand-spock"}, {"id": "6032:104", "name": "hand-spock-outline"},
    {"id": "6032:107", "name": "handshake"}, {"id": "6032:110", "name": "handshake-outline"},
    {"id": "6032:113", "name": "thumbs-down"}, {"id": "6032:116", "name": "thumbs-down-outline"},
    {"id": "6032:119", "name": "thumbs-up"}, {"id": "6032:122", "name": "thumbs-up-outline"}
  ],
  "Arrows": [
    {"id": "6001:10482", "name": "angle-double-down"}, {"id": "6001:10483", "name": "angle-double-left"},
    {"id": "6001:10484", "name": "angle-double-right"}, {"id": "6001:10485", "name": "angle-double-up"},
    {"id": "6001:10508", "name": "angle-left"}, {"id": "6001:10509", "name": "angle-right"},
    {"id": "6001:10511", "name": "angle-up"}, {"id": "6001:10512", "name": "arrow-alternate-circle-down"},
    {"id": "6001:10513", "name": "arrow-alternate-circle-down-outline"}, {"id": "6001:10735", "name": "arrow-alternate-circle-left"},
    {"id": "6001:10736", "name": "arrow-alternate-circle-left-outline"}, {"id": "6001:10737", "name": "arrow-alternate-circle-right"},
    {"id": "6001:10738", "name": "arrow-alternate-circle-right-outline"}, {"id": "6001:10739", "name": "arrow-alternate-circle-up"},
    {"id": "6001:10744", "name": "arrow-alternate-circle-up-outline"}, {"id": "6001:10743", "name": "arrow-circle-down"},
    {"id": "6001:10740", "name": "arrow-circle-up"}, {"id": "6001:10764", "name": "arrow-down"},
    {"id": "6001:10763", "name": "arrow-left"}, {"id": "6001:10762", "name": "arrow-right"},
    {"id": "6001:10761", "name": "arrow-up"}, {"id": "6001:10760", "name": "arrows-alternate"},
    {"id": "6001:10780", "name": "arrows-alternate-horizontal"}, {"id": "6001:10781", "name": "arrows-alternate-vertical"},
    {"id": "6001:10782", "name": "caret-down"}, {"id": "6001:10783", "name": "caret-left"},
    {"id": "6001:10784", "name": "caret-right"}, {"id": "6001:10801", "name": "caret-square-down"},
    {"id": "6001:10802", "name": "caret-square-down-outline"}, {"id": "6001:10803", "name": "caret-square-left"},
    {"id": "6001:10804", "name": "caret-square-left-outline"}, {"id": "6001:10805", "name": "caret-square-right"},
    {"id": "6001:10838", "name": "caret-square-right-outline"}, {"id": "6001:10839", "name": "caret-square-up"},
    {"id": "6001:10840", "name": "caret-square-up-outline"}, {"id": "6001:10841", "name": "caret-up"},
    {"id": "6001:10842", "name": "cart-arrow-down"}, {"id": "6001:10863", "name": "chart-line"},
    {"id": "6001:10862", "name": "chevron-circle-down"}, {"id": "6001:10861", "name": "chevron-circle-left"},
    {"id": "6001:10860", "name": "chevron-circle-right"}, {"id": "6001:10859", "name": "chevron-circle-up"},
    {"id": "6002:27", "name": "chevron-down"}, {"id": "6002:28", "name": "chevron-left"},
    {"id": "6002:29", "name": "chevron-right"}, {"id": "6002:30", "name": "chevron-up"},
    {"id": "6002:31", "name": "cloud-download"}, {"id": "6002:42", "name": "cloud-upload"},
    {"id": "6002:43", "name": "download"}, {"id": "6002:44", "name": "exchange"},
    {"id": "6002:45", "name": "expand-arrows-alternate"}, {"id": "6002:46", "name": "external-alternate"},
    {"id": "6002:164", "name": "external-square-alternate"}, {"id": "6002:165", "name": "hand-point-down"},
    {"id": "6002:166", "name": "hand-point-down-outline"}, {"id": "6002:167", "name": "hand-point-left"},
    {"id": "6002:168", "name": "hand-point-left-outline"}, {"id": "6002:179", "name": "hand-point-right"},
    {"id": "6002:180", "name": "hand-point-right-outline"}, {"id": "6002:181", "name": "hand-point-up"},
    {"id": "6002:182", "name": "hand-point-up-outline"}, {"id": "6002:183", "name": "hand-pointer"},
    {"id": "6002:271", "name": "hand-pointer-outline"}, {"id": "6002:272", "name": "history"},
    {"id": "6002:273", "name": "level-down-alternate"}, {"id": "6002:274", "name": "level-up-alternate"},
    {"id": "6002:275", "name": "location-arrow"}, {"id": "6002:289", "name": "long-arrow-alternate-left"},
    {"id": "6002:290", "name": "long-arrow-alternate-left-alt"}, {"id": "6002:291", "name": "long-arrow-alternate-right"},
    {"id": "6002:292", "name": "long-arrow-alternate-up"}, {"id": "6002:293", "name": "mouse-pointer"},
    {"id": "6002:610", "name": "random"}, {"id": "6002:611", "name": "recycle"},
    {"id": "6002:612", "name": "redo"}, {"id": "6002:613", "name": "redo-alternate"},
    {"id": "6002:616", "name": "reply"}, {"id": "6002:619", "name": "reply-all"},
    {"id": "6002:626", "name": "retweet"}, {"id": "6002:627", "name": "share"},
    {"id": "6002:628", "name": "share-square"}, {"id": "6002:664", "name": "sign-in"},
    {"id": "6002:667", "name": "sign-out"}, {"id": "6002:672", "name": "share-square-outline"},
    {"id": "6002:673", "name": "sign-in-alternate"}, {"id": "6002:674", "name": "sign-out-alternate"},
    {"id": "6002:677", "name": "sort"}, {"id": "6002:682", "name": "sort-down"},
    {"id": "6002:683", "name": "sync-alternate"}, {"id": "6002:686", "name": "upload"},
    {"id": "6002:707", "name": "sort-alphabet-down"}, {"id": "6002:708", "name": "sort-alphabet-up"},
    {"id": "6002:709", "name": "sort-amount-down"}, {"id": "6002:710", "name": "sort-amount-up"},
    {"id": "6002:715", "name": "sort-numeric-down"}, {"id": "6002:718", "name": "sort-numeric-up"},
    {"id": "6002:724", "name": "sort-up"}, {"id": "6002:725", "name": "sync"},
    {"id": "6002:740", "name": "zoom-in"}, {"id": "6002:741", "name": "zoom-out"},
    {"id": "6002:742", "name": "text-height"}, {"id": "6002:743", "name": "text-width"},
    {"id": "6002:744", "name": "undo"}, {"id": "6002:745", "name": "undo-alternate"}
  ],
  "Business": [
    {"id": "6002:1641", "name": "address-book"}, {"id": "6002:1642", "name": "address-book-outline"},
    {"id": "6002:1643", "name": "address-card"}, {"id": "6002:1644", "name": "address-card-outline"},
    {"id": "6002:1645", "name": "archive"}, {"id": "6002:1911", "name": "balance-scale"},
    {"id": "6002:1912", "name": "birthday-cake"}, {"id": "6002:1913", "name": "book"},
    {"id": "6002:1914", "name": "briefcase"}, {"id": "6002:1915", "name": "building"},
    {"id": "6002:1928", "name": "building-outline"}, {"id": "6002:1927", "name": "bullhorn"},
    {"id": "6002:1924", "name": "bullseye"}, {"id": "6002:1925", "name": "calculator"},
    {"id": "6002:1926", "name": "calendar"}, {"id": "6002:1948", "name": "calendar-outline"},
    {"id": "6002:1947", "name": "calendar-alternate"}, {"id": "6002:1946", "name": "calendar-alternate-outline"},
    {"id": "6002:1945", "name": "certificate"}, {"id": "6002:1944", "name": "chart-area"},
    {"id": "6002:1970", "name": "chart-bar"}, {"id": "6002:1971", "name": "chart-bar-outline"},
    {"id": "6002:1972", "name": "chart-line"}, {"id": "6002:1973", "name": "chart-pie"},
    {"id": "6002:1974", "name": "clipboard"}, {"id": "6002:1999", "name": "clipboard-outline"},
    {"id": "6002:2000", "name": "coffee"}, {"id": "6002:2001", "name": "columns"},
    {"id": "6002:2002", "name": "compass"}, {"id": "6002:2003", "name": "compass-outline"},
    {"id": "6002:2034", "name": "copy"}, {"id": "6002:2035", "name": "copy-outline"},
    {"id": "6002:2036", "name": "copyright"}, {"id": "6002:2037", "name": "cut"},
    {"id": "6002:2038", "name": "edit"}, {"id": "6002:2043", "name": "edit-outline"},
    {"id": "6002:2042", "name": "envelope"}, {"id": "6002:2041", "name": "envelope-outline"},
    {"id": "6002:2040", "name": "envelope-open"}, {"id": "6002:2039", "name": "envelope-open-outline"},
    {"id": "6002:2263", "name": "envelope-square"}, {"id": "6002:2262", "name": "eraser"},
    {"id": "6002:2261", "name": "fax"}, {"id": "6002:2260", "name": "file"},
    {"id": "6002:2259", "name": "file-outline"}, {"id": "6002:2264", "name": "file-alternate"},
    {"id": "6002:2265", "name": "file-alternate-outline"}, {"id": "6002:2266", "name": "folder"},
    {"id": "6002:2267", "name": "folder-outline"}, {"id": "6002:2268", "name": "folder-open"},
    {"id": "6002:2288", "name": "folder-open-outline"}, {"id": "6002:2287", "name": "globe"},
    {"id": "6002:2286", "name": "industry"}, {"id": "6002:2285", "name": "paperclip"},
    {"id": "6002:2284", "name": "paste"}, {"id": "6002:2302", "name": "pen-square"},
    {"id": "6002:2303", "name": "pencil-alternate"}, {"id": "6002:2304", "name": "percent"},
    {"id": "6002:2305", "name": "phone"}, {"id": "6002:2308", "name": "phone-square"},
    {"id": "6002:2315", "name": "registered"}, {"id": "6002:2316", "name": "registered-outline"},
    {"id": "6002:2317", "name": "save"}, {"id": "6033:116", "name": "save-outline"},
    {"id": "6033:117", "name": "sitemap"}, {"id": "6002:2342", "name": "sticky-note"},
    {"id": "6002:2343", "name": "sticky-note-outline"}, {"id": "6002:2344", "name": "suitcase"},
    {"id": "6002:2345", "name": "table"}, {"id": "6002:2346", "name": "tag"},
    {"id": "6002:2359", "name": "tags"}, {"id": "6002:2358", "name": "tasks"},
    {"id": "6002:2357", "name": "thumbtack"}, {"id": "6002:2356", "name": "trademark"}
  ],
  "Logistics": [
    {"id": "6002:2734", "name": "box"}, {"id": "6002:2735", "name": "boxes"},
    {"id": "6002:2736", "name": "clipboard-check"}, {"id": "6002:2737", "name": "clipboard-list"},
    {"id": "6002:2738", "name": "dolly"}, {"id": "6002:2746", "name": "dolly-flatbed"},
    {"id": "6002:2749", "name": "pallet"}, {"id": "6002:2752", "name": "shipping-fast"},
    {"id": "6002:2755", "name": "truck"}, {"id": "6002:2758", "name": "warehouse"}
  ],
  "Code": [
    {"id": "6002:3383", "name": "barcode"}, {"id": "6002:3384", "name": "bath"},
    {"id": "6002:3386", "name": "bug"}, {"id": "6002:3343", "name": "code"},
    {"id": "6002:3342", "name": "code-branch"}, {"id": "6002:3387", "name": "file-code"},
    {"id": "6002:3401", "name": "file-code-outline"}, {"id": "6002:3402", "name": "filter"},
    {"id": "6002:3403", "name": "fire-extinguisher"}, {"id": "6002:3404", "name": "keyboard"},
    {"id": "6002:3388", "name": "keyboard-outline"}, {"id": "6002:3400", "name": "microchip"},
    {"id": "6002:3399", "name": "qrcode"}, {"id": "6002:3398", "name": "shield-alternate"},
    {"id": "6002:3397", "name": "terminal"}, {"id": "6002:3389", "name": "user-secret"},
    {"id": "6002:3393", "name": "window-close"}, {"id": "6002:3394", "name": "window-close-outline"},
    {"id": "6002:3395", "name": "window-maximize"}, {"id": "6002:3396", "name": "window-maximize-outline"},
    {"id": "6002:3390", "name": "window-minimize"}, {"id": "6002:3391", "name": "window-minimize-outline"},
    {"id": "6002:3392", "name": "window-restore"}, {"id": "6002:3412", "name": "window-restore-outline"}
  ],
  "Sports": [
    {"id": "6011:341", "name": "baseball-ball"}, {"id": "6011:342", "name": "basketball-ball"},
    {"id": "6011:349", "name": "bowling-ball"}, {"id": "6011:348", "name": "football-ball"},
    {"id": "6011:347", "name": "futbol"}, {"id": "6011:340", "name": "futbol-outline"},
    {"id": "6011:343", "name": "golf-ball"}, {"id": "6011:344", "name": "hockey-puck"},
    {"id": "6011:345", "name": "quidditch"}, {"id": "6011:346", "name": "table-tennis"},
    {"id": "6010:339", "name": "volleyball-ball"}
  ],
  "Genders": [
    {"id": "6002:2958", "name": "genderless"}, {"id": "6002:2959", "name": "mars"},
    {"id": "6002:2960", "name": "double-mars"}, {"id": "6002:2961", "name": "mars-stroke"},
    {"id": "6002:2962", "name": "mars-stroke-horizontal"}, {"id": "6002:2970", "name": "mars-stroke-vertical"},
    {"id": "6002:2975", "name": "mercury"}, {"id": "6002:2976", "name": "neuter"},
    {"id": "6002:2981", "name": "transgender"}, {"id": "6002:2982", "name": "transgender-alternate"},
    {"id": "6002:3012", "name": "venus"}, {"id": "6002:3013", "name": "venus-double"},
    {"id": "6002:3014", "name": "venus-mars"}
  ],
  "Spinners": [
    {"id": "6003:1722", "name": "circle-notch"}, {"id": "6003:1723", "name": "spinner"}
  ],
  "Communication": [
    {"id": "6003:54", "name": "at"}, {"id": "6003:55", "name": "bell"},
    {"id": "6003:56", "name": "bell-outline"}, {"id": "6003:57", "name": "bell-slash"},
    {"id": "6003:58", "name": "bell-slash-outline"}, {"id": "6003:63", "name": "comment"},
    {"id": "6003:62", "name": "comment-outline"}, {"id": "6003:61", "name": "comment-alternate"},
    {"id": "6003:60", "name": "comment-alternate-outline"}, {"id": "6003:59", "name": "comments"},
    {"id": "6003:64", "name": "comments-outline"}, {"id": "6003:65", "name": "inbox"},
    {"id": "6003:66", "name": "language"}, {"id": "6003:67", "name": "paper-plane"},
    {"id": "6003:68", "name": "paper-plane-outline"}
  ],
  "Files": [
    {"id": "6003:1749", "name": "file-archive"}, {"id": "6003:1750", "name": "file-archive-outline"},
    {"id": "6003:1751", "name": "file-audio"}, {"id": "6003:1752", "name": "file-audio-outline"},
    {"id": "6003:1753", "name": "file-excel"}, {"id": "6003:1748", "name": "file-excel-outline"},
    {"id": "6003:1747", "name": "file-image"}, {"id": "6003:1746", "name": "file-image-outline"},
    {"id": "6003:1745", "name": "file-pdf"}, {"id": "6003:1744", "name": "file-pdf-outline"},
    {"id": "6003:1739", "name": "file-powerpoint"}, {"id": "6003:1740", "name": "file-powerpoint-outline"},
    {"id": "6003:1741", "name": "file-video"}, {"id": "6003:1742", "name": "file-video-outline"},
    {"id": "6003:1743", "name": "file-word"}, {"id": "6003:1738", "name": "file-word-outline"}
  ],
  "Computers": [
    {"id": "6002:3680", "name": "desktop"}, {"id": "6002:3689", "name": "hdd"},
    {"id": "6002:3690", "name": "hdd-outline"}, {"id": "6002:3691", "name": "headphones"},
    {"id": "6002:3692", "name": "laptop"}, {"id": "6002:3681", "name": "mobile"},
    {"id": "6002:3688", "name": "mobile-alternate"}, {"id": "6002:3687", "name": "plug"},
    {"id": "6002:3686", "name": "power-off"}, {"id": "6002:3693", "name": "print"},
    {"id": "6002:3682", "name": "server"}, {"id": "6002:3683", "name": "tablet"},
    {"id": "6002:3684", "name": "tablet-alternate"}, {"id": "6002:3685", "name": "tv"}
  ],
  "Editors": [
    {"id": "6012:845", "name": "align-center"}, {"id": "6012:846", "name": "align-justify"},
    {"id": "6012:847", "name": "align-left"}, {"id": "6012:848", "name": "align-right"},
    {"id": "6012:849", "name": "bold"}, {"id": "6012:854", "name": "font"},
    {"id": "6012:853", "name": "heading"}, {"id": "6012:852", "name": "i-cursor"},
    {"id": "6012:851", "name": "indent"}, {"id": "6012:850", "name": "italic"},
    {"id": "6012:855", "name": "linkify"}, {"id": "6012:856", "name": "list"},
    {"id": "6012:857", "name": "list-alternate"}, {"id": "6012:858", "name": "list-alternate-outline"},
    {"id": "6012:859", "name": "list-ol"}, {"id": "6012:864", "name": "list-ul"},
    {"id": "6012:863", "name": "outdent"}, {"id": "6012:862", "name": "strikethrough"},
    {"id": "6012:861", "name": "subscript"}, {"id": "6012:860", "name": "superscript"},
    {"id": "6012:865", "name": "th"}, {"id": "6012:866", "name": "th-large"},
    {"id": "6012:867", "name": "th-list"}, {"id": "6012:868", "name": "underline"},
    {"id": "6012:869", "name": "unlink"}
  ],
  "Vehicles": [
    {"id": "6003:829", "name": "bicycle"}, {"id": "6003:830", "name": "bus"},
    {"id": "6003:831", "name": "car"}, {"id": "6003:832", "name": "fighter-jet"},
    {"id": "6003:833", "name": "motorcycle"}, {"id": "6003:838", "name": "plane"},
    {"id": "6003:837", "name": "rocket"}, {"id": "6003:836", "name": "ship"},
    {"id": "6003:835", "name": "space-shuttle"}, {"id": "6003:834", "name": "subway"},
    {"id": "6003:839", "name": "taxi"}, {"id": "6003:840", "name": "train"}
  ],
  "Health": [
    {"id": "6003:590", "name": "ambulance"}, {"id": "6003:597", "name": "band-aid"},
    {"id": "6003:596", "name": "dna"}, {"id": "6003:595", "name": "first-aid"},
    {"id": "6003:591", "name": "h-square"}, {"id": "6003:592", "name": "heartbeat"},
    {"id": "6003:593", "name": "hospital"}, {"id": "6003:594", "name": "hospital-outline"},
    {"id": "6003:600", "name": "hospital-symbol"}, {"id": "6003:601", "name": "pills"},
    {"id": "6003:599", "name": "stethoscope"}, {"id": "6003:602", "name": "syringe"},
    {"id": "6003:603", "name": "thermometer"}, {"id": "6003:598", "name": "user-md"},
    {"id": "6003:604", "name": "weight"}, {"id": "6053:8", "name": "tooth"},
    {"id": "6064:33", "name": "crutch"}
  ],
  "DateTime": [
    {"id": "6003:1706", "name": "calendar-check"}, {"id": "6003:1718", "name": "calendar-check-outline"},
    {"id": "6003:1719", "name": "calendar-minus"}, {"id": "6003:1720", "name": "calendar-minus-outline"},
    {"id": "6003:1721", "name": "calendar-plus"}, {"id": "6003:1707", "name": "calendar-plus-outline"},
    {"id": "6003:1717", "name": "calendar-times"}, {"id": "6003:1716", "name": "calendar-times-outline"},
    {"id": "6003:1715", "name": "clock"}, {"id": "6003:1714", "name": "clock-outline"},
    {"id": "6003:1709", "name": "hourglass"}, {"id": "6003:1710", "name": "hourglass-outline"},
    {"id": "6003:1711", "name": "hourglass-end"}, {"id": "6003:1712", "name": "hourglass-half"},
    {"id": "6003:1713", "name": "hourglass-start"}, {"id": "6003:1708", "name": "stopwatch"}
  ],
  "Design": [
    {"id": "6003:1724", "name": "adjust"}, {"id": "6003:1737", "name": "clone"},
    {"id": "6003:1736", "name": "clone-outline"}, {"id": "6003:1735", "name": "crop"},
    {"id": "6003:1734", "name": "eye"}, {"id": "6003:1725", "name": "eyedropper"},
    {"id": "6003:1730", "name": "eye-slash"}, {"id": "6003:1731", "name": "eye-slash-outline"},
    {"id": "6003:1732", "name": "object-group"}, {"id": "6003:1733", "name": "object-group-outline"},
    {"id": "6003:1726", "name": "object-ungroup"}, {"id": "6003:1727", "name": "object-ungroup-outline"},
    {"id": "6003:1728", "name": "paint-brush"}, {"id": "6003:1729", "name": "tint"}
  ],
  "Writing": [
    {"id": "6003:1758", "name": "bookmark"}, {"id": "6003:1757", "name": "bookmark-outline"},
    {"id": "6003:1756", "name": "newspaper"}, {"id": "6003:1755", "name": "newspaper-outline"},
    {"id": "6003:1754", "name": "paragraph"}, {"id": "6003:1759", "name": "quote-left"},
    {"id": "6003:1760", "name": "quote-right"}, {"id": "6057:12", "name": "comment-pen"}
  ],
  "AudioVideo": [
    {"id": "6002:1109", "name": "backward"}, {"id": "6002:1108", "name": "circle"},
    {"id": "6002:1118", "name": "circle-outline"}, {"id": "6002:1119", "name": "compress"},
    {"id": "6002:1120", "name": "eject"}, {"id": "6002:1121", "name": "expand"},
    {"id": "6002:1132", "name": "fast-backward"}, {"id": "6002:1133", "name": "fast-forward"},
    {"id": "6002:1134", "name": "file-audio"}, {"id": "6002:1135", "name": "file-audio-outline"},
    {"id": "6002:1136", "name": "file-video"}, {"id": "6002:1141", "name": "file-video-outline"},
    {"id": "6002:1148", "name": "film"}, {"id": "6002:1147", "name": "forward"},
    {"id": "6002:1146", "name": "headphones"}, {"id": "6002:1153", "name": "microphone"},
    {"id": "6002:1160", "name": "microphone-slash"}, {"id": "6002:1161", "name": "music"},
    {"id": "6002:1162", "name": "pause"}, {"id": "6002:1163", "name": "pause-circle"},
    {"id": "6002:1169", "name": "pause-circle-outline"}, {"id": "6002:1172", "name": "phone-volume"},
    {"id": "6002:609", "name": "play"}, {"id": "6002:1175", "name": "play-circle"},
    {"id": "6002:1178", "name": "play-circle-outline"}, {"id": "6002:1199", "name": "podcast"},
    {"id": "6002:1200", "name": "rss"}, {"id": "6002:1201", "name": "rss-square"},
    {"id": "6002:1202", "name": "step-backward"}, {"id": "6002:1203", "name": "step-forward"},
    {"id": "6002:1377", "name": "stop"}, {"id": "6002:1378", "name": "stop-circle"},
    {"id": "6002:1379", "name": "stop-circle-outline"}, {"id": "6002:1380", "name": "video"},
    {"id": "6002:1381", "name": "volume-down"}, {"id": "6002:1382", "name": "volume-off"},
    {"id": "6002:1383", "name": "volume-up"}
  ],
  "UsersPeople": [
    {"id": "6003:1691", "name": "bed"}, {"id": "6003:1692", "name": "child"},
    {"id": "6003:1693", "name": "female"}, {"id": "6003:1694", "name": "id-badge"},
    {"id": "6003:1695", "name": "id-badge-outline"}, {"id": "6003:1702", "name": "id-card"},
    {"id": "6003:1701", "name": "id-card-outline"}, {"id": "6003:1700", "name": "male"},
    {"id": "6003:1699", "name": "user"}, {"id": "6003:1696", "name": "user-outline"},
    {"id": "6003:1703", "name": "user-circle"}, {"id": "6003:1704", "name": "user-circle-outline"},
    {"id": "6003:1705", "name": "user-plus"}, {"id": "6003:1698", "name": "user-times"},
    {"id": "6003:1697", "name": "users"}
  ],
  "Currency": [
    {"id": "6003:265", "name": "dollar-sign"}, {"id": "6003:266", "name": "euro-sign"},
    {"id": "6003:267", "name": "lira-sign"}, {"id": "6003:268", "name": "money-bill-alternate"},
    {"id": "6003:269", "name": "money-bill-alternate-outline"}, {"id": "6003:274", "name": "pound-sign"},
    {"id": "6003:273", "name": "ruble-sign"}, {"id": "6003:272", "name": "rupee-sign"},
    {"id": "6003:271", "name": "shekel-sign"}, {"id": "6003:270", "name": "won-sign"},
    {"id": "6003:275", "name": "yen-sign"}
  ],
  "Objects": [
    {"id": "6065:51", "name": "book-open"}, {"id": "6065:52", "name": "book-open-outline"},
    {"id": "6016:2260", "name": "camera"}, {"id": "6016:2261", "name": "cube"},
    {"id": "6016:2262", "name": "cubes"}, {"id": "6016:2263", "name": "moon"},
    {"id": "6016:2264", "name": "moon-outline"}, {"id": "6016:2269", "name": "puzzle-piece"},
    {"id": "6016:2268", "name": "snowflake"}, {"id": "6016:2267", "name": "snowflake-outline"},
    {"id": "6016:2266", "name": "sun"}, {"id": "6016:2265", "name": "sun-outline"},
    {"id": "6016:2270", "name": "tachometer-alternate"}
  ],
  "PaymentsShopping": [
    {"id": "6012:1158", "name": "camera-retro"}, {"id": "6012:1159", "name": "cart-plus"},
    {"id": "6012:1160", "name": "credit-card"}, {"id": "6012:1161", "name": "credit-card-outline"},
    {"id": "6012:1162", "name": "gem"}, {"id": "6012:1163", "name": "gem-outline"},
    {"id": "6012:1164", "name": "gift"}, {"id": "6012:1165", "name": "key"},
    {"id": "6012:1166", "name": "shopping-bag"}, {"id": "6012:1167", "name": "shopping-basket"},
    {"id": "6012:1169", "name": "shopping-cart"}, {"id": "6012:1168", "name": "trophy"}
  ],
  "Chess": [
    {"id": "6032:123", "name": "chess"}, {"id": "6032:125", "name": "chess-bishop"},
    {"id": "6032:126", "name": "chess-board"}, {"id": "6032:127", "name": "chess-king"},
    {"id": "6032:128", "name": "chess-knight"}, {"id": "6032:139", "name": "chess-pawn"},
    {"id": "6032:138", "name": "chess-queen"}, {"id": "6032:137", "name": "chess-rook"},
    {"id": "6032:129", "name": "square-full"}
  ]
}

let generated = 0

for (const [cat, icons] of Object.entries(categories)) {
  const catDir = join(ICONS_DIR, cat)

  for (const icon of icons) {
    const componentName = toPascalCase(icon.name)
    const nodeId = icon.id.replace(':', '-')
    const figmaUrl = `https://www.figma.com/design/${FILE_KEY}/Member-Experience-Iconography?node-id=${nodeId}`

    const content = `import figma from "@figma/code-connect"
import ${componentName}Icon from "./${componentName}Icon"

figma.connect(
  "${figmaUrl}",
  {
    props: {},
    example: () => <${componentName}Icon />,
  }
)
`
    writeFileSync(join(catDir, `${componentName}Icon.figma.tsx`), content)
    generated++
  }
}

console.log(`Generated ${generated} .figma.tsx Code Connect files.`)
