export const options = {
  "name": "List Create Sale Sale Products Api",
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
      "selling_price": {
        "type": "float",
        "required": true,
        "read_only": false,
        "label": "Selling price"
      },
      "serial_numbers": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Serial numbers",
        "max_length": 500,
        "from_field": "product",
        "show_only": true,
        "show_only_field": "require_serial_number"
      },
      "quantity": {
        "type": "integer",
        "required": false,
        "read_only": false,
        "label": "Quantity",
        "min_value": -2147483648,
        "max_value": 2147483647,
        "from_field": "product",
        "show_only": false,
        "show_only_field": "require_serial_number"
      },
      "sale": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "Sale"
      },
      "product": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "Product",
        "search_field": "name",
        "display_name": "name",
        "url": ``,
        "instance_url": "api/v1/product-configs/"
      }
    }
  }
}

