# Categories

- category_id (SERIAL, PRIMARY KEY)
- category_name (VARCHAR, NOT NULL, UNIQUE)
- description (TEXT)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

# Products

- product_id (SERIAL, PRIMARY KEY)
- product_slug (VARCHAR, UNIQUE, NOT NULL)
- product_name (VARCHAR, NOT NULL)
- category_id (INTEGER, REFERENCES Categories)
- set_size (INTEGER)
- color (VARCHAR, NOT NULL)
- cost (DECIMAL, NOT NULL)
- price (DECIMAL, NOT NULL)
- discount_price (DECIMAL)
- description (TEXT)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

# Media

- media_id (SERIAL, PRIMARY KEY)
- product_id (INTEGER, REFERENCES Products)
- category_id (INTEGER, REFERENCES Categories)
- media_type (VARCHAR, NOT NULL)
- media_url (TEXT, NOT NULL)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

# Inventory

- inventory_id (SERIAL, PRIMARY KEY)
- product_slug (VARCHAR, REFERENCES Products)
- inventory_uuid (UUID, DEFAULT gen_random_uuid(), UNIQUE)
- product_id (INTEGER, REFERENCES Products)
- category_id (INTEGER, REFERENCES Categories)
- stock_quantity (INTEGER, NOT NULL)
- last_restocked_date (TIMESTAMP)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
- updated_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
