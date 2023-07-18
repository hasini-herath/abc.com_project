"use client";

import Link from "next/link";

const SignUp = ({ type, post, setPost, submitting, handleSubmit }) => {
 
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={post.email}
            onChange={(e) => setPost({ ...post, email: e.target.value })}

            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={post.password}
            onChange={(e) => setPost({ ...post, password: e.target.value })}

            required
          />
        </div>
        <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
      </form>
    </div>
  );
};
export default SignUp;
