  const computerdatas = [
        // your data array[
        {
            id: 1,
            specs: {
              model: "Dell",
              ram: "8GB RAM",
              harddisk: "256GB SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp1.jpg",
            price: "US$ 1000",
            categoty:'Mid Range',
            visibility:'public',
          desc:"Dell is a well-known computer manufacturer that offers a wide range of products, including laptops, desktops, workstations, and gaming systems. Dell computers are known for their reliability, performance, and innovative features. They cater to various user needs, from home and business users to gamers and professionals."
        },
          {
            id: 2,
            specs: {
              model: "Lenovo",
              ram: "8GB RAM",
              harddisk: "256GB SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp2.jpg",
            price: "US$ 1200",
            categoty:'Entry Level',
            visibility:'public',
            desc:" Lenovo is a global technology company that manufactures computers, including laptops, desktops, workstations, and tablets. Lenovo computers are known for their quality build, durability, and innovative features. They offer a range of models designed for various purposes, from everyday computing to gaming and business use."
        },
          {
            id: 3,
            specs: {
              model: "Asus",
              ram: "8GB RAM",
              categoty:'',
            visibility:'public',
              harddisk: "128 SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp3.jpg",
            price: "US$ 900",
            categoty:'High End',
            visibility:'public',
            desc:"ASUS is a leading computer manufacturer known for its high-quality and reliable products. They offer a wide range of laptops and desktops designed for various purposes, including everyday use, gaming, and professional tasks. ASUS computers are known for their performance, innovation, and stylish designs. They cater to different user preferences and provide options for both casual users and enthusiasts."
        },
          {
            id: 4,
            specs: {
              model: "Mac",
              ram: "16GB RAM",
              harddisk: "1TB SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp4.jpg",
            price: "US$ 2200",
            categoty:'High End',
            visibility:'public',
            desc:"Mac computers are produced by Apple Inc. and run on macOS, Apple's proprietary operating system. Macs are known for their sleek design, user-friendly interface, and integration with other Apple devices and services. They are popular among creative professionals, such as designers, musicians, and video editors, for their powerful hardware and software ecosystem."
        },
          {
            id: 5,
            specs: {
              model: "Microsoft",
              ram: "8GB RAM",
              harddisk: "512GB SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp5.jpg",
            price: "US$ 1800",
            categoty:'Mid Range',
            visibility:'public',
            desc:"Microsoft produces a range of computers, including laptops and Surface devices. The Surface lineup includes convertible devices that can function as both laptops and tablets. Microsoft computers are known for their premium build quality, performance, and compatibility with Microsoft software and services. They provide options for productivity-focused users, creatives, and professionals."
        },
            {
            id: 6,
            specs: {
              model: "ChromeBook",
              ram: "4GB RAM",
              harddisk: "512GB SSD"
            },
            image: process.env.PUBLIC_URL + "/images/comp6.jpg",
            price: "US$ 1400",
            categoty:'Entry Level',
            visibility:'public',
            desc:"Chromebooks are a specific type of laptop that run on Google's Chrome OS operating system. These devices are designed to be highly affordable, lightweight, and focused on cloud-based computing. Chromebooks primarily utilize web applications and store data in the cloud, making them suitable for users who primarily work online and require basic computing functionalities."
        }
    
      ];
      export default computerdatas