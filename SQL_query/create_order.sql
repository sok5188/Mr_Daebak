CREATE TABLE ORDERS(
    order_id  INT NOT NULL AUTO_INCREMENT ,
    menu VARCHAR(10),
    style VARCHAR(10),
    customer_id VARCHAR(10) NOT NULL,
    change_list VARCHAR(255),
    PRIMARY KEY(order_id),
    FOREIGN KEY (customer_id) REFERENCES AUTH (id) ON UPDATE CASCADE
);
