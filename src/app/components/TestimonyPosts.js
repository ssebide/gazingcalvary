import React from 'react';
import { getTestimonies} from '../../../gazingnew/lib/test'
import TestimonyCard from './TestimonyCard';

const TestimonyPosts = async () => {
  const testimonies = await getTestimonies();
  return (
    <div id="testimony">
      <div className="flex overflow-x-auto mt-8" style={{ scrollbarWidth: 'none' }}>
      <ul className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8 w-11/12 justify-center mx-auto ">
        {testimonies.map((testimony) => (
            <li key={testimony._id} className="flex-none">
            <TestimonyCard testimonyData={testimony} />
            </li>
        ))}
        </ul>
    </div>
    </div>
  );
};

export default TestimonyPosts;