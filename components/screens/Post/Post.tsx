import { MDXComponents } from '@/root/components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'

import { Layout } from '@/root/components/shared/Layout'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { Newsletter } from '@/root/components/shared/Newsletter'
import { PostCredits } from '@/root/components/mdx/PostCredits'

type PostProps = {
  content: {
    compiledSource: string
    renderedOutput: string
    scope?: any
  }
  frontMatter: {
    title: string
    description: string
    image: string
  }
}

const postVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function Post({ content, frontMatter }: PostProps) {
  return (
    <Layout
      description={frontMatter.description}
      image={`https://joyofcode.xyz${frontMatter.image}`}
      title={frontMatter.title}
      type="article"
    >
      <MotionBox
        animate="show"
        className="mdx-prose"
        initial="hidden"
        maxW="72ch"
        mx="auto"
        variants={postVariants}
      >
        <MDXRemote {...content} components={MDXComponents} />
        <Newsletter />
        <PostCredits />
      </MotionBox>
    </Layout>
  )
}
