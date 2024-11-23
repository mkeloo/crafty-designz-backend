-- Creating Categories Table
CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    type_count INTEGER DEFAULT 0,  -- Tracks the number of types in the category
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Subcategories (
    subcategory_id SERIAL PRIMARY KEY,
    subcategory_name VARCHAR(255) NOT NULL UNIQUE,
    category_id INTEGER REFERENCES Categories(category_id),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creating Products Table
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_slug VARCHAR(100) UNIQUE NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    category_id INTEGER REFERENCES Categories(category_id),
    subcategory_id INTEGER REFERENCES Subcategories(subcategory_id), -- Add FK for consistency
    color VARCHAR(50) NOT NULL,  -- Each product entry will represent a unique color variant
    cost DECIMAL(10, 2) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discount_price DECIMAL(10, 2),
    description TEXT,
    stock_quantity INTEGER NOT NULL,
    product_uuid UUID DEFAULT gen_random_uuid() UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creating Media Table
CREATE TABLE Media (
    media_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES Products(product_id),
    category_id INTEGER REFERENCES Categories(category_id), 
    media_type VARCHAR(50) NOT NULL,
    media_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- INSERT COMMANDS

INSERT INTO Categories (category_name, description, type_count)
VALUES (
    'Chunky Blankets',
    'Different types of handmade chunky blankets.',
    4  -- Set the type_count explicitly
);


INSERT INTO Subcategories (subcategory_name, category_id, description)
VALUES
  ('Baby Blanket', 1, 'Soft and cozy blankets designed for babies, perfect for keeping them warm and comfortable.'),
  ('Small Throw Blanket', 1, 'Compact and stylish throw blankets, ideal for children, pets, or as decorative accents.'),
  ('Medium Blanket', 1, 'Medium-sized blankets, versatile for various uses like lounging or light bedding.'),
  ('Crochet Toys', 1, 'Handmade crochet toys that are both decorative and fun, perfect as unique gifts.');


-- Creating Inventory Table with UUID
-- CREATE TABLE Inventory (
--     inventory_id SERIAL PRIMARY KEY,
--     product_slug VARCHAR(100) REFERENCES Products(product_slug), 
--     inventory_uuid UUID DEFAULT gen_random_uuid() UNIQUE,  -- Globally unique identifier for inventory items
--     product_id INTEGER REFERENCES Products(product_id),
--     category_id INTEGER REFERENCES Categories(category_id), 
--     stock_quantity INTEGER NOT NULL,
--     last_restocked_date TIMESTAMP,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );




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
-- DROP TABLE IF EXISTS Products CASCADE;
-- DROP TABLE IF EXISTS Categories CASCADE;

insert into
  Categories (category_name, description)
values
  (
    'Chunky Blankets',
    'Different types of handmade chunky blankets.'
  );

-- Inserting initial data into Categories Table
INSERT INTO Categories (category_name, description)
VALUES 
    ('Keychains', 'Various types of self-defense and decorative keychains'),
    ('Blankets', 'Different types of blankets, including baby blankets');




-- Inserting initial data into Products Table
-- Inserting into Products Table
INSERT INTO Products (
    product_slug,
    product_name,
    category_id,
    set_size,
    color,
    cost,
    price,
    discount_price,
    description,
    created_at,
    updated_at
)
VALUES (
    'keychain-10pc-santizer-black-checkered',
    'Safety Keychain Set, Women Keychain, Keychain Set, Gift for Women!',
    (SELECT category_id FROM Categories WHERE category_name = 'Keychains'),
    10,
    'Checkered Black',
    5.00,
    19.99,
    16.99,
    'Product Description',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);

-- Inserting into Inventory Table
INSERT INTO Inventory (
    product_slug,
    product_id,
    category_id,
    inventory_uuid,
    stock_quantity,
    last_restocked_date,
    created_at,
    updated_at
)
VALUES (
    'keychain-10pc-santizer-black-checkered',
    (SELECT product_id FROM Products WHERE product_slug = 'keychain-10pc-santizer-black-checkered'),
    (SELECT category_id FROM Products WHERE product_slug = 'keychain-10pc-santizer-black-checkered'),
    gen_random_uuid(),
    8,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);


-- SELECT ALL CATEGORIES COMMAND:
SELECT * FROM Categories;
SELECT * FROM Products;
SELECT * FROM Inventory;
