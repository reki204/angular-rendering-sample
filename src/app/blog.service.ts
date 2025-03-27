import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: '1',
      title: 'Angular v19とTailwind CSSの魅力',
      content:
        '最新のAngularとTailwind CSSを使用して、モダンでレスポンシブなウェブアプリケーションを作成する方法について詳しく解説します。',
      author: '管理者',
      createdAt: new Date(),
      tags: ['Angular', 'Tailwind CSS', 'Frontend'],
    },
    {
      id: '2',
      title: 'Angular v19とTailwind CSSの魅力',
      content:
        '最新のAngularとTailwind CSSを使用して、モダンでレスポンシブなウェブアプリケーションを作成する方法について詳しく解説します。',
      author: 'ユーザー',
      createdAt: new Date(),
      tags: ['Angular', 'Tailwind CSS', 'Frontend'],
    },
    {
      id: '3',
      title: 'Angular v19とTailwind CSSの魅力',
      content:
        '最新のAngularとTailwind CSSを使用して、モダンでレスポンシブなウェブアプリケーションを作成する方法について詳しく解説します。',
      author: 'ユーザー',
      createdAt: new Date(),
      tags: ['Angular', 'Tailwind CSS', 'Frontend'],
    },
    {
      id: '4',
      title: 'Angular v19とTailwind CSSの魅力',
      content:
        '最新のAngularとTailwind CSSを使用して、モダンでレスポンシブなウェブアプリケーションを作成する方法について詳しく解説します。',
      author: 'ユーザー',
      createdAt: new Date(),
      tags: ['Angular', 'Tailwind CSS', 'Frontend'],
    },
  ];

  public getPosts(): BlogPost[] {
    return this.posts;
  }

  public getPostById(id: string): BlogPost | undefined {
    return this.posts.find((post) => post.id === id);
  }
}
