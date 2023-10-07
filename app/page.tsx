'use client'

import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <Link href='#section5' rel="noopener">
        Test
      </Link>
      <p>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas mi et quam euismod luctus. Praesent mattis vehicula nibh non luctus. Curabitur non nisi sapien. In at risus non justo facilisis porttitor efficitur id urna. Aliquam erat volutpat. Duis metus mauris, dictum ut leo quis, laoreet aliquet lorem. Integer eleifend mauris vel metus commodo condimentum. Quisque volutpat molestie scelerisque. Fusce tempus eros eu iaculis tempus. Vivamus at velit at felis tristique vehicula. Curabitur ultrices viverra purus, nec elementum lacus ultricies quis. Aliquam volutpat felis massa, vitae varius urna aliquet et. Nullam accumsan ligula sit amet nunc hendrerit, non hendrerit dui tempus. Nam orci mauris, commodo sed iaculis sed, iaculis ut ante.
      </p>
      <p>
        Ut imperdiet fermentum ante in vulputate. In eleifend venenatis lacus sed cursus. Sed eget augue quis tellus venenatis porttitor. Donec nisi velit, ornare id condimentum id, viverra ut sem. Suspendisse faucibus turpis vel velit rhoncus placerat. Sed id elit non nunc auctor ornare ut in mi. Praesent a dolor ante. Nam suscipit nunc lectus, sit amet mollis felis convallis sed. Maecenas ac aliquam dolor. Vivamus faucibus congue dui, sed bibendum urna vulputate eu. Donec in sem sit amet ligula auctor convallis ac ut dolor.
      </p>
      <p>
        Pellentesque malesuada lacus vel interdum lobortis. Cras sed leo fringilla augue vestibulum vulputate. Aliquam ipsum mauris, facilisis ut congue nec, cursus vitae erat. Etiam semper purus nec pulvinar tincidunt. Aliquam lobortis, nisi et laoreet bibendum, ante elit facilisis urna, ac aliquet magna massa id nisl. Suspendisse a dapibus elit. In enim leo, pulvinar at consequat a, sollicitudin non nulla. Fusce id magna tellus. Nullam maximus et nisl ac convallis. Nulla malesuada urna sed arcu maximus, dignissim convallis orci ultricies. In ultricies augue vestibulum diam facilisis, non dapibus mauris iaculis. Pellentesque libero felis, hendrerit in efficitur eu, iaculis quis mauris.
      </p>
      <p>
        Sed vestibulum turpis ex, in posuere elit auctor pretium. Suspendisse cursus lacus at ligula faucibus semper. Aenean vulputate, nisi nec viverra auctor, risus diam condimentum orci, nec sollicitudin justo metus sit amet nibh. Suspendisse mauris enim, elementum vel metus ac, bibendum vestibulum risus. Praesent ipsum enim, ultrices et ex sagittis, aliquam pellentesque dolor. Curabitur eu velit vel nulla lacinia vehicula. Quisque fermentum interdum ante at lobortis. Nam tincidunt mauris quis nunc tristique tristique. Mauris tempus nisi urna, ac pulvinar justo efficitur eget. Maecenas mi arcu, lobortis sed nulla at, bibendum scelerisque neque. In nisi dolor, consectetur at magna in, congue blandit sem. Vestibulum sed arcu nisi. Aenean luctus ex et gravida imperdiet.
      </p>
      <p>
        Ut imperdiet fermentum ante in vulputate. In eleifend venenatis lacus sed cursus. Sed eget augue quis tellus venenatis porttitor. Donec nisi velit, ornare id condimentum id, viverra ut sem. Suspendisse faucibus turpis vel velit rhoncus placerat. Sed id elit non nunc auctor ornare ut in mi. Praesent a dolor ante. Nam suscipit nunc lectus, sit amet mollis felis convallis sed. Maecenas ac aliquam dolor. Vivamus faucibus congue dui, sed bibendum urna vulputate eu. Donec in sem sit amet ligula auctor convallis ac ut dolor.
      </p>
      <p>
        Pellentesque malesuada lacus vel interdum lobortis. Cras sed leo fringilla augue vestibulum vulputate. Aliquam ipsum mauris, facilisis ut congue nec, cursus vitae erat. Etiam semper purus nec pulvinar tincidunt. Aliquam lobortis, nisi et laoreet bibendum, ante elit facilisis urna, ac aliquet magna massa id nisl. Suspendisse a dapibus elit. In enim leo, pulvinar at consequat a, sollicitudin non nulla. Fusce id magna tellus. Nullam maximus et nisl ac convallis. Nulla malesuada urna sed arcu maximus, dignissim convallis orci ultricies. In ultricies augue vestibulum diam facilisis, non dapibus mauris iaculis. Pellentesque libero felis, hendrerit in efficitur eu, iaculis quis mauris.
      </p>
      <p>
        Sed vestibulum turpis ex, in posuere elit auctor pretium. Suspendisse cursus lacus at ligula faucibus semper. Aenean vulputate, nisi nec viverra auctor, risus diam condimentum orci, nec sollicitudin justo metus sit amet nibh. Suspendisse mauris enim, elementum vel metus ac, bibendum vestibulum risus. Praesent ipsum enim, ultrices et ex sagittis, aliquam pellentesque dolor. Curabitur eu velit vel nulla lacinia vehicula. Quisque fermentum interdum ante at lobortis. Nam tincidunt mauris quis nunc tristique tristique. Mauris tempus nisi urna, ac pulvinar justo efficitur eget. Maecenas mi arcu, lobortis sed nulla at, bibendum scelerisque neque. In nisi dolor, consectetur at magna in, congue blandit sem. Vestibulum sed arcu nisi. Aenean luctus ex et gravida imperdiet.
      </p>
      <p>
        Ut imperdiet fermentum ante in vulputate. In eleifend venenatis lacus sed cursus. Sed eget augue quis tellus venenatis porttitor. Donec nisi velit, ornare id condimentum id, viverra ut sem. Suspendisse faucibus turpis vel velit rhoncus placerat. Sed id elit non nunc auctor ornare ut in mi. Praesent a dolor ante. Nam suscipit nunc lectus, sit amet mollis felis convallis sed. Maecenas ac aliquam dolor. Vivamus faucibus congue dui, sed bibendum urna vulputate eu. Donec in sem sit amet ligula auctor convallis ac ut dolor.
      </p>
      <p>
        Pellentesque malesuada lacus vel interdum lobortis. Cras sed leo fringilla augue vestibulum vulputate. Aliquam ipsum mauris, facilisis ut congue nec, cursus vitae erat. Etiam semper purus nec pulvinar tincidunt. Aliquam lobortis, nisi et laoreet bibendum, ante elit facilisis urna, ac aliquet magna massa id nisl. Suspendisse a dapibus elit. In enim leo, pulvinar at consequat a, sollicitudin non nulla. Fusce id magna tellus. Nullam maximus et nisl ac convallis. Nulla malesuada urna sed arcu maximus, dignissim convallis orci ultricies. In ultricies augue vestibulum diam facilisis, non dapibus mauris iaculis. Pellentesque libero felis, hendrerit in efficitur eu, iaculis quis mauris.
      </p>
      <p>
        Sed vestibulum turpis ex, in posuere elit auctor pretium. Suspendisse cursus lacus at ligula faucibus semper. Aenean vulputate, nisi nec viverra auctor, risus diam condimentum orci, nec sollicitudin justo metus sit amet nibh. Suspendisse mauris enim, elementum vel metus ac, bibendum vestibulum risus. Praesent ipsum enim, ultrices et ex sagittis, aliquam pellentesque dolor. Curabitur eu velit vel nulla lacinia vehicula. Quisque fermentum interdum ante at lobortis. Nam tincidunt mauris quis nunc tristique tristique. Mauris tempus nisi urna, ac pulvinar justo efficitur eget. Maecenas mi arcu, lobortis sed nulla at, bibendum scelerisque neque. In nisi dolor, consectetur at magna in, congue blandit sem. Vestibulum sed arcu nisi. Aenean luctus ex et gravida imperdiet.
      </p>
      <p>
        Ut imperdiet fermentum ante in vulputate. In eleifend venenatis lacus sed cursus. Sed eget augue quis tellus venenatis porttitor. Donec nisi velit, ornare id condimentum id, viverra ut sem. Suspendisse faucibus turpis vel velit rhoncus placerat. Sed id elit non nunc auctor ornare ut in mi. Praesent a dolor ante. Nam suscipit nunc lectus, sit amet mollis felis convallis sed. Maecenas ac aliquam dolor. Vivamus faucibus congue dui, sed bibendum urna vulputate eu. Donec in sem sit amet ligula auctor convallis ac ut dolor.
      </p>
      <p>
        Pellentesque malesuada lacus vel interdum lobortis. Cras sed leo fringilla augue vestibulum vulputate. Aliquam ipsum mauris, facilisis ut congue nec, cursus vitae erat. Etiam semper purus nec pulvinar tincidunt. Aliquam lobortis, nisi et laoreet bibendum, ante elit facilisis urna, ac aliquet magna massa id nisl. Suspendisse a dapibus elit. In enim leo, pulvinar at consequat a, sollicitudin non nulla. Fusce id magna tellus. Nullam maximus et nisl ac convallis. Nulla malesuada urna sed arcu maximus, dignissim convallis orci ultricies. In ultricies augue vestibulum diam facilisis, non dapibus mauris iaculis. Pellentesque libero felis, hendrerit in efficitur eu, iaculis quis mauris.
      </p>
      <p>
        Sed vestibulum turpis ex, in posuere elit auctor pretium. Suspendisse cursus lacus at ligula faucibus semper. Aenean vulputate, nisi nec viverra auctor, risus diam condimentum orci, nec sollicitudin justo metus sit amet nibh. Suspendisse mauris enim, elementum vel metus ac, bibendum vestibulum risus. Praesent ipsum enim, ultrices et ex sagittis, aliquam pellentesque dolor. Curabitur eu velit vel nulla lacinia vehicula. Quisque fermentum interdum ante at lobortis. Nam tincidunt mauris quis nunc tristique tristique. Mauris tempus nisi urna, ac pulvinar justo efficitur eget. Maecenas mi arcu, lobortis sed nulla at, bibendum scelerisque neque. In nisi dolor, consectetur at magna in, congue blandit sem. Vestibulum sed arcu nisi. Aenean luctus ex et gravida imperdiet.
      </p>
      <p>
        <a id="section5" />
        Integer aliquam dolor eleifend erat blandit, id imperdiet nulla facilisis. Suspendisse dignissim lorem a arcu mollis, sit amet pulvinar tortor dapibus. Maecenas sagittis, magna id sodales posuere, metus purus malesuada nunc, efficitur pretium ex arcu id sem. Vestibulum metus elit, sagittis sit amet pellentesque at, ullamcorper ut orci. Quisque at suscipit libero. Nam hendrerit purus ac dignissim laoreet. Maecenas est orci, semper sit amet vehicula eu, vestibulum feugiat neque. Quisque ullamcorper mattis odio, nec hendrerit libero luctus eget. Pellentesque fermentum enim non mauris semper commodo. In semper maximus ante, et euismod magna aliquet non. Aenean a volutpat nunc. Donec eu ante mattis, commodo nibh a, facilisis purus. Maecenas vitae neque vel dolor venenatis sodales eu ut massa.
      </p>
      <Link href='' rel="noopener">
        Back
      </Link>
    </main>
  )
}
