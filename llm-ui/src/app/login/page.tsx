'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 로그인 로직을 구현하세요
    console.log('로그인 시도:', email, password);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="bg-white dark:bg-black p-8 rounded-lg w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                이메일
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2 bg-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-4 py-2 bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              로그인
            </button>
          </form>

          <Link
            href="/"
            className="mt-4 block text-center text-sm text-gray-600 dark:text-gray-400 hover:underline hover:underline-offset-4"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          홈으로
        </Link>
      </footer>
    </div>
  );
}