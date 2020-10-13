![](https://img.shields.io/github/package-json/v/kaskadi/apps-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/apps-api?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/apps-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/apps-api/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/apps-api/build?label=build&logo=mocha)](https://github.com/kaskadi/apps-api/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/apps-api/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/apps-api/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/apps-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/apps-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/apps-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/apps-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/apps-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/apps-api)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/apps-api?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/apps-api/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The origin and root path for this API is: `https://api.klimapartner.net/apps`

The following endpoints are defined in this API:
- [/](#/)

## `/` <a name="/"></a>

Supported methods:
- [GET](#/-GET)

### `GET` (target lambda → [get-apps](#get-apps)) <a name="/-GET"></a>

**Description:**

This endpoint lists all applications available for the Kaskadi project.

**Authorization:**

No authorizer found for this method.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/apps/
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  [
    {
      "listed": true,
      "title": {
        "en": "Accounting",
        "de": "Buchhaltung",
        "fr": "Comptabilité"
      },
      "section": "finance",
      "main": "kaskadi-accounting.js",
      "description": {
        "en": "Accounting app",
        "de": "Buchhaltung",
        "fr": "Application pour la comptabilité"
      },
      "routes": [
        {
          "path": "/finance/accounting",
          "appPath": "/modules/@kaskadi/kaskadi-apps/kaskadi-accounting/kaskadi-accounting.js"
        }
      ]
    },
    {
      "listed": false,
      "title": {
        "en": "APP-TITLE-ENGLISH",
        "de": "APP-TITLE-GERMAN",
        "fr": "APP-TITLE-FRENCH"
      },
      "section": "",
      "main": "kaskadi-dashboard.js",
      "description": {
        "en": "APP-DESCRIPTION-ENGLISH",
        "de": "APP-DESCRIPTION-GERMAN",
        "fr": "APP-DESCRIPTION-FRENCH"
      },
      "routes": [
        {
          "path": "/",
          "appPath": "/modules/@kaskadi/kaskadi-apps/kaskadi-dashboard/kaskadi-dashboard.js"
        }
      ]
    }
  ]
```
</details>

# API resources

The following lambda functions are used in this API:
- [get-apps](#get-apps)

The following layers are used in this API:
- [apps-api-layer](#apps-api-layer)

## get-apps <a name="get-apps"></a>

|   Name   | Sources                | Timeout |                  Handler                  | Layers                                              |
| :------: | :--------------------- | :-----: | :---------------------------------------: | :-------------------------------------------------- |
| get-apps | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/get-apps/get-apps.js) | <ul><li>[apps-api-layer](#apps-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## apps-api-layer <a name="apps-api-layer"></a>

### Description

Layer for apps-api

### Dependencies

- `aws-sdk`, version: `2.765.0` ([see on NPM](https://www.npmjs.com/package/aws-sdk))

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value    |
| :----------- | :------- |
| app          | kaskadi  |
| service      | apps-api |
| logical-unit | apps     |
| type         | http     |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->