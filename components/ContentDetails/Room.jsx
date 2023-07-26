'use client';
import RoomCard from "@components/ContentDetails/RoomCard";

const Profile = ({ name, desc, data, }) => {
  return (
    <section >
      <h1 >
        
      </h1>
      <p >{desc}</p>

      <div >
        {data.map((post) => (
          <RoomCard
            key={post._id}
            post={post}
            
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
