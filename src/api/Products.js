class Card {
  constructor(id, name, price, isNew = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isNew = isNew;
  }
}

const cards = [
  new Card(0, 'Nike Kyrie Low 5 "Precious"', 130, true),
  new Card(1, 'Nike Kyrie Infinity TB "University red"', 90, true),
  new Card(2, 'LEGO x Adidas D.O.N Issue', 110, true),
  new Card(3, 'Nike Lebron Witness 7', 130, true),
  new Card(4, 'Air Jordan 1 Retro', 115, false),
  new Card(5, 'Adidas Trae Young 2', 100, false),
  new Card(6, 'Nike Zoom Freak 4 "Bahamas"', 100, false),
  new Card(7, 'Nike air Force 1 Boot NN', 100, false),
  new Card(8, 'Air Jordan 1 Mid SE', 130, false),
  new Card(9, 'Nike Air Force 1’07', 130, false),
  new Card(10, 'Nike Dunk Low Pro ISO SB', 50, false),
  new Card(11, 'Nike Dunk Low SE “Black"', 60, false),
  new Card(12, 'Nike Dunk Low “3D Swoosh"', 70, false),
  new Card(13, 'Nike Air Force Premium...', 70, false),
  new Card(14, 'Nike Air Force 1 Mid ‘07 LX', 80, false),
  new Card(15, 'Nike Dunk Low “Reverce', 85, false),
  new Card(16, 'NikeAir Wafle One', 85, false),
  new Card(17, 'Nike Air Trainer 1', 85, false),
  new Card(18, 'Nike Air Force 1’07 LV8', 110, false),
  new Card(19, 'Nike Air Force 1 Luxe', 120, false),
  new Card(20, 'Nike Air Force 1’07 “Premium', 120, false),
  new Card(21, 'Nike Air Force 1 Boot NN', 120, false),
  new Card(22, 'Nike Court Vision Mid Winter', 120, false),
  new Card(23, 'Nike Lunar Force 1 Duck', 130, false),
  new Card(24, 'Nike air Force 1 Boot NN', 130, false),
];

export default cards;
