# Products Table (Split Version)

## Categories Table

- Category ID (Primary Key)
- Category Name (e.g., Self Defense Keychains, Blankets)
- Description (Optional)
- created_at (Timestamp)
- updated_at (Timestamp)

## Products Table

- Product ID (Primary Key)
- Product Name
- Category ID (Foreign Key, linking to Categories Table)
- Set Size (e.g., number of pieces in a set)
- created_at (Timestamp)
- updated_at (Timestamp)

## Pricing Table

- Product ID (Foreign Key)
- Cost
- Price
- Discount Price
- created_at (Timestamp)
- updated_at (Timestamp)

## Product Details Table

- Product ID (Foreign Key)
- Description
- created_at (Timestamp)
- updated_at (Timestamp)

## Media Table

- Media ID (Primary Key)
- Product ID (Foreign Key, linking to Products Table)
- Color (Optional, represents the color variation associated with the media)
- Media Type (e.g., 'image', 'video')
- Media URL
- created_at (Timestamp)
- updated_at (Timestamp)

## Inventory Table

- Inventory ID (Primary Key)
- Product ID (Foreign Key, linking to Products Table)
- Color
- Stock Quantity
- Last Restocked Date
- created_at (Timestamp)
- updated_at (Timestamp)
