
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GateButtonMeta: ComponentMetadata = {
  "componentName": "GateButton",
  "title": "GateButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "your-material-name",
    "version": "0.1.0",
    "exportName": "GateButton",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content1111",
            "zh-CN": "content1111"
          }
        },
        "name": "content1111",
        "setter": {
          "componentName": "AltStringSetter",
          "isRequired": true,
          "initialValue": "123333"
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "GateButton",
    "screenshot": "",
    "schema": {
      "componentName": "GateButton",
      "props": {}
    }
  }
];

export default {
  ...GateButtonMeta,
  snippets
};
