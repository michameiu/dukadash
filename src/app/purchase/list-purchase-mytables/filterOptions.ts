export const filterOptions = {
  "name": "List Create Shop Purchases Api",
  "description": "",
  "renders": [
    "application/json",
    "text/html"
  ],
  "parses": [
    "application/json",
    "application/x-www-form-urlencoded",
    "multipart/form-data"
  ],
  "actions": {
    "POST": {
      "id": {
        "type": "integer",
        "required": false,
        "read_only": true,
        "label": "ID"
      },
      "created": {
        "type": "datetime",
        "required": false,
        "read_only": true,
        "label": "Created"
      },
      "modified": {
        "type": "datetime",
        "required": false,
        "read_only": true,
        "label": "Modified"
      },
      "active": {
        "type": "boolean",
        "required": false,
        "read_only": false,
        "label": "Active"
      },
      "transaction_type": {
        "type": "choice",
        "required": true,
        "read_only": false,
        "label": "Transaction type",
        "choices": [
          {
            "value": "P",
            "display_name": "Paid"
          },
          {
            "value": "C",
            "display_name": "Credit"
          }
        ]
      },
      "name": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Name",
        "max_length": 45
      },
      "vendor": {
        "type": "field",
        "required": false,
        "read_only": false,
        "label": "Vendor"
      },
      "branch": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "Branch"
      }
    }
  }
}