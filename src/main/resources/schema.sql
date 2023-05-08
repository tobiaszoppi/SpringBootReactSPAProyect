CREATE TABLE SERVICES (
                          SERVICE_ID  BIGINT AUTO_INCREMENT PRIMARY KEY,
                          NAME VARCHAR(255) UNIQUE,
                          PRICE DECIMAL(12,2)
);

CREATE TABLE CUSTOMERS (
                           CUSTOMER_ID  BIGINT AUTO_INCREMENT PRIMARY KEY,
                           FIRST_NAME VARCHAR(255),
                           LAST_NAME VARCHAR(255),
                           EMAIL VARCHAR(255),
                           PHONE VARCHAR(255),
                           ADDRESS VARCHAR(255)
);

CREATE TABLE VENDORS (
                         VENDOR_ID  BIGINT AUTO_INCREMENT PRIMARY KEY,
                         NAME VARCHAR(255) NOT NULL,
                         CONTACT VARCHAR(255),
                         PHONE VARCHAR(255),
                         EMAIL VARCHAR(255),
                         ADDRESS VARCHAR(255)
);

ALTER TABLE CUSTOMERS rename column ADDRESS to ADRESS;

CREATE TABLE PRODUCTS (
                          PRODUCT_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
                          NAME VARCHAR(255) UNIQUE,
                          PRICE DECIMAL(12,2),
                          VENDOR_ID BIGINT NOT NULL,
                          FOREIGN KEY (VENDOR_ID) REFERENCES VENDORS(VENDOR_ID)
);
