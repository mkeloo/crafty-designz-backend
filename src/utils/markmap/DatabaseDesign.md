# E-commerce Store Database Design Higher Level

## Categories Table

- Category ID (Primary Key)
- Category Name (Unique)
- Description
- Created At (Timestamp)
- Updated At (Timestamp)

## Products Table

- Product ID (Primary Key)
- Product Slug (Unique)
- Product Name
- Category ID (Foreign Key)
- Set Size (e.g., number of pieces)
- Color (Each product entry represents a unique color variant)
- Cost
- Price
- Discount Price
- Description
- Created At (Timestamp)
- Updated At (Timestamp)

## Media Table

- Media ID (Primary Key)
- Product ID (Foreign Key)
- Category ID (Foreign Key)
- Media Type (e.g., image, video)
- Media URL
- Created At (Timestamp)
- Updated At (Timestamp)

## Inventory Table

- Inventory ID (Primary Key)
- Product Slug (Foreign Key)
- Inventory UUID (Globally Unique Identifier)
- Product ID (Foreign Key)
- Category ID (Foreign Key)
- Stock Quantity
- Last Restocked Date
- Created At (Timestamp)
- Updated At (Timestamp)

## Customers Table

- Customer ID (Primary Key)
- Full Name
- Email
- Address
  - Street
  - City
  - State
  - Zip Code
- Phone Number
- Account Creation Date

## Orders Table

- Order ID (Primary Key)
- Customer ID (Foreign Key)
- Order Date
- Total Amount
- Status (e.g., Pending, Shipped, Delivered, Cancelled)
- Payment Status (e.g., Paid, Pending, Failed)

## OrderItems Table

- Order Item ID (Primary Key)
- Order ID (Foreign Key)
- Product ID (Foreign Key)
- Quantity
- Price at Time of Order
- Discount Applied

## Payments Table

- Payment ID (Primary Key)
- Order ID (Foreign Key)
- Payment Method (e.g., Credit Card, PayPal, Stripe)
- Payment Date
- Amount Paid
- Status (e.g., Completed, Pending, Failed)

## Shipping Table

- Shipping ID (Primary Key)
- Order ID (Foreign Key)
- Shipping Address
  - Street
  - City
  - State
  - Zip Code
- Shipping Method (e.g., Standard, Express)
- Tracking Number
- Estimated Delivery Date
- Shipped Date

## Product Reviews Table (Optional)

- Review ID (Primary Key)
- Product ID (Foreign Key)
- Customer ID (Foreign Key)
- Rating (e.g., 1-5)
- Review Text
- Review Date
