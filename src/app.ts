import fastify from 'fastify';
import { booksRouter } from './routes/books';
import cookies from '@fastify/cookie';

export const app = fastify();

app.register(cookies);

app.register(booksRouter, {
  prefix: '/books',
});
