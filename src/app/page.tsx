import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

const getBlogs = async() => {
  const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50");
  if(!res.ok) {
    throw new Error("Could Not Retrieve Blog Posts");
  };
  return await res.json();
};

export default async function Home() {
  const Blogs = await getBlogs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Blogs.blogs.length > 0 ? ( 
        <div>
          Blogs
        </div> 
      ):( <div>No Blog Found</div> )}
    </main>
  )
}
