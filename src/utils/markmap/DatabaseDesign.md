# E-commerce Store Database Design Higher Level

## Products Table

- Product ID (Primary Key)
- Product Name
- Category
- Type (e.g., pieces)
- Cost
- Price
- Discount Price
- Color
- Description
- Images (URLs)
- Stock Quantity
- created_at (Timestamp)
- updated_at (Timestamp)

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

## Inventory Table

- Product ID (Foreign Key)
- Stock Quantity
- Last Updated Date
- Adjustment Reason

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
