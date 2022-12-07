export const options = {
  "name": "List Create Sales Api",
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
        "label": "Customer Name",
        "max_length": 45
      },
      "company": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Company",
        "max_length": 45
      },
      "date": {
        "type": "datetime",
        "required": false,
        "read_only": false,
        "label": "Date"
      },
      "phone": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Customer Phone",
        "max_length": 20
      },
      "status": {
        "type": "string",
        "required": false,
        "read_only": true,
        "label": "Status"
      },
      "delivery_type": {
        "type": "choice",
        "required": false,
        "read_only": false,
        "label": "Delivery type",
        "choices": [
          {
            "value": "W",
            "display_name": "Walk In"
          },
          {
            "value": "P",
            "display_name": "Pickup"
          },
          {
            "value": "D",
            "display_name": "Delivery"
          }
        ]
      },
      "customer_location": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Customer location",
        "max_length": 300
      },
      "branch": {
        "type": "field",
        "required": true,
        "multiple": false,
        "placeholder": "Select branch",
        "url": `api/v1/shop-branches/`,
        "read_only": false,
        "search_field": "name",
        "display_name": "full_name",
        "label": "Branch"
      }
    }
  }
}

