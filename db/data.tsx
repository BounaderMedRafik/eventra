import { EventProps } from "./types";

export const About = () => {
  return (
    <>
      <img
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462280900_3981317925448250_4200214122994863013_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGA2kQ3yIEpg64bWVOOwzOp5obJpbagjkDmhsmltqCOQO4mC-TnSFdHHqYP5sON2jahp5bD8cAUVznQQN65SdqK&_nc_ohc=MMV0i282o38Q7kNvgGMbR19&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGjIsp_fjrsUSJbKdBlMtWInAj-5L3GdwhIX1i4zzW43w&oe=67785787"
        className=" h-24 w-full object-cover border"
      />
      <p className=" mt-4">
        <strong>Elevating Events, Simplifying Planning</strong>
      </p>
      <p>
        Eventra is more than just an event management company; we&#39;re your
        dedicated partner in bringing your vision to life. With a comprehensive
        suite of services, we&#39;re committed to streamlining every aspect of
        your event, from conception to conclusion.
      </p>
      <p>
        <strong>Our Mission</strong>
      </p>
      <p>
        Our mission is to provide innovative and efficient event solutions that
        exceed expectations. We strive to create memorable experiences for both
        organizers and attendees, transforming ordinary events into
        extraordinary occasions.
      </p>
      <p>
        <strong>Our Services</strong>
      </p>
      <ul>
        <li>
          <strong>Event Planning and Design:</strong> From concept to execution,
          our expert team will meticulously plan and design your event, ensuring
          every detail aligns with your vision.
        </li>
        <li>
          <strong>Venue Sourcing and Management:</strong> We&#39;ll find the
          perfect venue to suit your event&#39;s needs, handling all logistical
          aspects, including contracts, permits, and setup.{" "}
        </li>
        <li>
          <strong>Catering and Beverage Services:</strong> Our culinary experts
          will curate a delectable menu, tailored to your preferences and
          dietary requirements, ensuring a delightful dining experience.
        </li>
        <li>
          <strong>Audiovisual and Technical Support:</strong> State-of-the-art
          audiovisual equipment and expert technicians will guarantee seamless
          presentations and captivating performances.
        </li>
        <li>
          <strong>Entertainment and Theming:</strong> We&#39;ll curate
          captivating entertainment options, from live music and DJs to themed
          experiences, creating an unforgettable atmosphere.
        </li>
        <li>
          <strong>Marketing and Promotion:</strong> Our marketing team will
          craft compelling promotional campaigns to attract your target audience
          and generate excitement.
        </li>
      </ul>
      <p>
        <strong>Why Choose Eventra?</strong>
      </p>
      <ul>
        <li>
          <strong>Expertise:</strong> Our experienced team has a proven track
          record of delivering successful events across various industries.
        </li>
        <li>
          <strong>Customization:</strong> We understand that every event is
          unique. Our tailored approach ensures your event reflects your brand
          and style.
        </li>
        <li>
          <strong>Innovation:</strong> We embrace cutting-edge technology and
          creative solutions to elevate your event experience.
        </li>
        <li>
          <strong>Client-Centric Approach:</strong> Your satisfaction is our
          priority. We&#39;re committed to open communication and collaborative
          partnerships.
        </li>
        <li>
          <strong>Attention to Detail:</strong> We meticulously oversee every
          aspect of your event, ensuring flawless execution.
        </li>
      </ul>
      <p>
        <strong>Let&#39;s Create Something Extraordinary</strong>
      </p>
      <p>
        Whether you&#39;re planning a corporate conference, a product launch, a
        wedding, or a social gathering, Eventra is here to make your event a
        resounding success. Contact us today to discuss your event needs and
        embark on a journey of unparalleled event planning.
      </p>
    </>
  );
};

export const events: EventProps = [
  {
    id: "hackathon-2023",
    title: "Hackathon 2023",
    desc: "Join us for a 24-hour hackathon where teams will compete to build innovative solutions to real-world problems.",
    date: "2023-11-15",
    location: "Tech Hub, Main Campus",
    participant: [
      {
        name: "Alice Johnson",
        category: "Developer",
      },
      {
        name: "Bob Smith",
        category: "Designer",
      },
    ],
    typeOfEvent: "Competition",
    ImageOfEvent:
      "https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Images: [
      "https://images.pexels.com/photos/8720584/pexels-photo-8720584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5475758/pexels-photo-5475758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "guest-lecture-future-of-ai",
    title: "Guest Lecture: Future of AI",
    desc: "A guest lecture by Dr. Emily Chen, a leading expert in artificial intelligence, discussing the future trends and ethical considerations.",
    date: "2023-12-01",
    location: "Auditorium B, Main Campus",
    participant: [
      {
        name: "Dr. Emily Chen",
        category: "Speaker",
      },
      {
        name: "John Doe",
        category: "Organizer",
      },
    ],
    typeOfEvent: "Lecture",
    ImageOfEvent:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Images: [
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/20733081/pexels-photo-20733081/free-photo-of-gathering-during-event.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11329860/pexels-photo-11329860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "coding-bootcamp-python-for-beginners",
    title: "Coding Bootcamp: Python for Beginners",
    desc: "A week-long bootcamp designed to teach the basics of Python programming to beginners.",
    date: "2023-11-20",
    location: "Room 101, IT Building",
    participant: [
      {
        name: "Sarah Lee",
        category: "Instructor",
      },
      {
        name: "Michael Brown",
        category: "Organizer",
      },
    ],
    typeOfEvent: "Workshop",
    ImageOfEvent:
      "https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Images: [
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: "monthly-tech-meetup",
    title: "Monthly Tech Meetup",
    desc: "A casual meetup for tech enthusiasts to share ideas, projects, and network with each other.",
    date: "2023-11-30",
    location: "Café Tech, Downtown",
    participant: [
      {
        name: "Jessica White",
        category: "Community Member",
      },
      {
        name: "David Green",
        category: "Organizer",
      },
    ],
    typeOfEvent: "Networking",
    ImageOfEvent:
      "https://images.pexels.com/photos/5716000/pexels-photo-5716000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Images: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5439428/pexels-photo-5439428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4626350/pexels-photo-4626350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },

  {
    id: "tree-day",
    title: "Tree Day",
    desc: "A day dedicated to planting and caring for trees.",
    date: "2025-04-30",
    location: "Various locations worldwide",
    participant: [
      {
        name: "Jane Goodall",
        category: "Environmental Activist",
      },
      {
        name: "David Suzuki",
        category: "Environmental Scientist",
      },
      {
        name: "Greta Thunberg",
        category: "Climate Activist",
      },
    ],
    typeOfEvent: "Environmental",
    ImageOfEvent:
      "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/Arbor-day-3-1.jpg",
    Images: [
      "https://www.daysoftheyear.com/wp-content/uploads/national-love-a-tree-day-e1714864268549.jpg",
      "https://www.farmersalmanac.com/wp-content/uploads/2020/07/Earth-Day-Arbor-Day-History-i813059638.jpeg",
      "https://www.arborday.org/sites/arborday.org/files/styles/embed_large/public/media/2024-10/allianceforcommunitytrees_hero_cta-featured_miami_1648x1280.jpg.webp",
    ],
  },
  {
    id: "yennayer-jan-12",
    title: "Yennayer Jan 12",
    desc: "Celebration of the Amazigh New Year.",
    date: "2025-01-12",
    location: "North Africa and Amazigh communities worldwide Museum",
    participant: [
      {
        name: "Amazigh Musician Idir",
        category: "Musician",
      },
      {
        name: "Fatima Tabaamrant",
        category: "Singer",
      },
      {
        name: "Mohammed Choukri",
        category: "Author",
      },
    ],
    typeOfEvent: "Cultural",
    ImageOfEvent:
      "https://observalgerie.com/wp-content/uploads/2022/01/yennayer-1-1980x1200.jpg",
    Images: [
      "https://www.liberte-algerie.com/storage/images/article/d_a37807c14e2b9b24006b2cb825ccd674.jpg",
      "https://www.lejourdalgerie.com/wp-content/uploads/2023/01/une110122.jpg",
    ],
  },
  {
    id: "mothers-day",
    title: "Mother's Day",
    desc: "A day to honor mothers and mother figures.",
    date: "2025-05-12",
    location: "Cultural Center Alg Center",
    participant: [
      {
        name: "Oprah Winfrey",
        category: "Media Personality",
      },
      {
        name: "Michelle Obama",
        category: "Former First Lady",
      },
      {
        name: "Maya Angelou",
        category: "Poet and Author",
      },
    ],
    typeOfEvent: "Celebration",
    ImageOfEvent:
      "https://cdn.shopify.com/s/files/1/1532/8239/files/v2-acix7-yp12p_600x600.jpg?v=1713004345",
    Images: [
      "https://www.daysoftheyear.com/wp-content/uploads/happy-mother-s-day-2021-08-27-22-12-32-utc-scaled.jpg",
      "https://ideas.shutterfly.com/wp-content/uploads/2022/05/Featured-image-of-mother-reading-a-Mothers-day-card-with-quotes-from-her-son.jpg",
      "https://4kinderteachers.com/wp-content/uploads/2021/07/mothers-day-activities-1024x1024.jpg",
    ],
  },
];
