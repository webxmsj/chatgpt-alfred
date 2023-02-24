module.exports = {
  outputName: 'chatgpt',
  "bundleid": "com.webxmsj.chatgpt-alfred",
  "category": "Tools",
  "connections": {},
  "createdby": "webxmsj",
  "description": "An alfred tool that uses chatgpt",
  "disabled": false,
  "name": "chatgpt-alfred",
  "objects": [
    {
      "config": {
        "alfredfiltersresults": false,
        "alfredfiltersresultsmatchmode": 0,
        "argumenttreatemptyqueryasnil": true,
        "argumenttrimmode": 0,
        "argumenttype": 0,
        "escaping": 102,
        "keyword": "gpt",
        "queuedelaycustom": 3,
        "queuedelayimmediatelyinitially": true,
        "queuedelaymode": 1,
        "queuemode": 1,
        "runningsubtext": "询问中",
        "script": "./index '{query}'",
        "scriptargtype": 0,
        "scriptfile": "",
        "subtext": "",
        "title": "咨询chatgpt",
        "type": 5,
        "withspace": true
      },
      "type": "alfred.workflow.input.scriptfilter",
      "uid": "F59B3122-1FEA-4A98-89C3-59048BA203F5",
      "version": 3
    }
  ],
  "readme": "一个支持在alfred中使用chatgpt的小工具",
  "uidata": {
    "F59B3122-1FEA-4A98-89C3-59048BA203F5": {
      "xpos": 115,
      "ypos": 120
    }
  },
  "userconfigurationconfig": [],
  "variables": {
    "OPENAI_API_KEY": "xxx"
  },
  "variablesdontexport": [
    "OPENAI_API_KEY"
  ],
  "version": "1.0",
  "webaddress": "https://www.webxmsj.com"
}