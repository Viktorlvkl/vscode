/**
 * Represents a book.
 * @author Victor Eustaquio
 * @tutorial
 * Open Command Palette (ctrl+shift+p) 
 * Search for >Open Keyboard Shortcuts (JSON)
 * Place the following key bindings
 */

[
  {
    "key": "cmd+shift+l",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "console.log(${TM_SELECTED_TEXT}$1)$0;"
    }
  },
  {
    "key": "cmd+shift+j",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "JSON.stringify(${TM_SELECTED_TEXT}$1, null, 2)$0"
    }
  }
]
