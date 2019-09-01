--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Contents; Type: TABLE; Schema: public; Owner: joseph
--

CREATE TABLE public."Contents" (
    id integer NOT NULL,
    idea_id integer,
    post character varying(255),
    audio character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    html character varying(255)
);


ALTER TABLE public."Contents" OWNER TO joseph;

--
-- Name: Contents_id_seq; Type: SEQUENCE; Schema: public; Owner: joseph
--

CREATE SEQUENCE public."Contents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Contents_id_seq" OWNER TO joseph;

--
-- Name: Contents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joseph
--

ALTER SEQUENCE public."Contents_id_seq" OWNED BY public."Contents".id;


--
-- Name: Ideas; Type: TABLE; Schema: public; Owner: joseph
--

CREATE TABLE public."Ideas" (
    id integer NOT NULL,
    subject character varying(255),
    category character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Ideas" OWNER TO joseph;

--
-- Name: Ideas_id_seq; Type: SEQUENCE; Schema: public; Owner: joseph
--

CREATE SEQUENCE public."Ideas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Ideas_id_seq" OWNER TO joseph;

--
-- Name: Ideas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: joseph
--

ALTER SEQUENCE public."Ideas_id_seq" OWNED BY public."Ideas".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: joseph
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO joseph;

--
-- Name: Contents id; Type: DEFAULT; Schema: public; Owner: joseph
--

ALTER TABLE ONLY public."Contents" ALTER COLUMN id SET DEFAULT nextval('public."Contents_id_seq"'::regclass);


--
-- Name: Ideas id; Type: DEFAULT; Schema: public; Owner: joseph
--

ALTER TABLE ONLY public."Ideas" ALTER COLUMN id SET DEFAULT nextval('public."Ideas_id_seq"'::regclass);


--
-- Data for Name: Contents; Type: TABLE DATA; Schema: public; Owner: joseph
--

COPY public."Contents" (id, idea_id, post, audio, "createdAt", "updatedAt", html) FROM stdin;
28	10	Hello ddd !Paragraph 2	aaa	2019-08-22 11:25:16.63-04	2019-08-22 11:25:16.63-04	<p>Hello <b>ddd</b> !</p><p>Paragraph 2</p>
29	11	Hello dd !Paragraph 2	aaa	2019-08-22 11:45:17.628-04	2019-08-22 11:45:17.628-04	<p>Hello <b>dd</b> !</p><p>Paragraph 2</p>
30	12	Hellooooooo&nbsp;!	bop	2019-08-23 11:36:47.964-04	2019-08-23 11:36:47.964-04	<p>Hellooooooo !</p>
\.


--
-- Data for Name: Ideas; Type: TABLE DATA; Schema: public; Owner: joseph
--

COPY public."Ideas" (id, subject, category, "createdAt", "updatedAt") FROM stdin;
10	first song	music	2019-08-22 11:02:02.847-04	2019-08-22 11:02:02.847-04
11	second song	music	2019-08-22 11:41:05.768-04	2019-08-22 11:41:05.768-04
12	third song	music	2019-08-23 11:36:32.717-04	2019-08-23 11:36:32.717-04
13	fourth song	music	2019-08-24 10:32:15.107-04	2019-08-24 10:32:15.107-04
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: joseph
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190803175505-create-idea.js
20190803175624-create-content.js
20190822151402-add_html_to_contents.js
\.


--
-- Name: Contents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joseph
--

SELECT pg_catalog.setval('public."Contents_id_seq"', 30, true);


--
-- Name: Ideas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joseph
--

SELECT pg_catalog.setval('public."Ideas_id_seq"', 13, true);


--
-- Name: Contents Contents_pkey; Type: CONSTRAINT; Schema: public; Owner: joseph
--

ALTER TABLE ONLY public."Contents"
    ADD CONSTRAINT "Contents_pkey" PRIMARY KEY (id);


--
-- Name: Ideas Ideas_pkey; Type: CONSTRAINT; Schema: public; Owner: joseph
--

ALTER TABLE ONLY public."Ideas"
    ADD CONSTRAINT "Ideas_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: joseph
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- PostgreSQL database dump complete
--

