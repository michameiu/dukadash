export const filterOptions = {
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
        "max_length": 500
      },
      "quantity": {
        "type": "integer",
        "required": false,
        "read_only": false,
        "label": "Quantity",
        "min_value": -2147483648,
        "max_value": 2147483647
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
        "label": "Product"
      }
    }
  }
}