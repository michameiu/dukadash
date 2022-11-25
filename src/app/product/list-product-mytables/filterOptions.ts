export const filterOptions = {
    "name": "List Create Shop Product Configs Api",
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
            "name": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Name",
                "max_length": 45
            },
            "require_serial_number": {
                "type": "boolean",
                "required": false,
                "read_only": false,
                "label": "Require serial number"
            },
            "shop": {
                "type": "field",
                "placeholder": "Search shop name..",
                "required": true,
                "multiple": false,
                "url": `api/v1/shops/`,
                "search_field": "name",
                "display_name": "name",
                "read_only": false,
                "label": "Shop"
            }
        }
    }
}