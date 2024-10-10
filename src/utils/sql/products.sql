-- Creating Categories Table
CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creating Products Table
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES Categories(category_id),
    set_size INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creating Pricing Table
CREATE TABLE Pricing (
    product_id INTEGER REFERENCES Products(product_id),
    cost DECIMAL(10, 2) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id)
);

-- Creating Product Details Table
CREATE TABLE ProductDetails (
    product_id INTEGER REFERENCES Products(product_id),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (product_id)
);

-- Creating Media Table
CREATE TABLE Media (
    media_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES Products(product_id),
    color VARCHAR(50),
    media_type VARCHAR(50) NOT NULL,
    media_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creating Inventory Table with UUID
CREATE TABLE Inventory (
    inventory_id SERIAL PRIMARY KEY,
    inventory_uuid UUID DEFAULT gen_random_uuid() UNIQUE,
    product_id INTEGER REFERENCES Products(product_id),
    color VARCHAR(50) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    last_restocked_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Inserting initial data into Categories Table
-- Removed initial data entries to prevent duplication

-- SHOW TABLES COMMAND:
SELECT table_name 
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_type = 'BASE TABLE';


-- DROP TABLES COMMAND:
-- DROP TABLE IF EXISTS Inventory CASCADE;
-- DROP TABLE IF EXISTS Media CASCADE;
-- DROP TABLE IF EXISTS ProductDetails CASCADE;
-- DROP TABLE IF EXISTS Pricing CASCADE;
-- DROP TABLE IF EXISTS Products CASCADE;
-- DROP TABLE IF EXISTS Categories CASCADE;


-- Inserting initial data into Categories Table
INSERT INTO Categories (category_name, description)
VALUES 
    ('Keychains', 'Various types of self-defense and decorative keychains'),
    ('Blankets', 'Different types of blankets, including baby blankets');



-- SELECT ALL CATEGORIES COMMAND:
SELECT * FROM Categories;


