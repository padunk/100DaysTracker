import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navigation = (props: Props) => {
    return (
        <nav className='w-screen bg-indigo-500 flex flex-wrap justify-around py-6 shadow-xl border-t-4 border-pink-500 items-center'>
            <div className='hover-nav text-xl'>
                <Link to='/skill-list'>
                    <svg
                        viewBox='0 0 64 64'
                        className='w-16'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M33.55 50.55L35 62h-6l.93-12.08c.05-.32.07-.63.07-.92h2z'
                            fill='#ff826e'
                        />
                        <path
                            d='M20.96 51.35c1.25 1.47 3.35 2.59 4.04 4.65 3.42-1.71 4.65-4.16 4.93-6.08L29 62h-8V52h-.04zM20 49c0 .94.39 1.68.96 2.35V52H20l-4.96.62A6.265 6.265 0 018 46.41V36h6v9.36c0 .41.16.8.45 1.09s.68.45 1.08.45c.08 0 .16-.01.24-.02l5.15-.79c-.24.29-.92 1.26-.92 2.91zM46.99 46.69l1.24.19A1.536 1.536 0 0050 45.36V36h6v10.41c0 1.66-.66 3.25-1.83 4.42a6.277 6.277 0 01-4.43 1.84c-.26 0-.52-.02-.78-.05L44 52h-1v10h-8l-1.45-11.45L36 53l1.72-7.74z'
                            fill='#b4dd7f'
                        />
                        <path
                            d='M37.72 45.26L36 53l-2.45-2.45L32 49l4-4z'
                            fill='#a0d468'
                        />
                        <path
                            d='M20.94 46.08C19.35 44.77 18 43.05 18 41c0-4 3-5 3-5v-7.5c0-2.9 1.18-5.52 3.08-7.42S28.6 18 31.5 18C37.3 18 42 22.7 42 28.5v.5s2 2 2 5-1 4-1 7c0 2.16 3.72 2.94 3.99 5.69l-9.27-1.43L36 45v-3l-.09-.19A6.984 6.984 0 0039 36v-7h-4.39c-2.36 0-4.65-.7-6.61-2l-3 2v7c0 1.94.78 3.68 2.05 4.95.56.56 1.22 1.03 1.95 1.37v.01c-.01.87-.1 2.02-.84 2.83 1 1 1.84 1.84 1.84 3.84l-.07.92c-.28 1.92-1.51 4.37-4.93 6.08-.69-2.06-2.79-3.18-4.04-4.65-.57-.67-.96-1.41-.96-2.35 0-1.65.68-2.62.92-2.91h.03z'
                            fill='#656d78'
                        />
                        <path
                            d='M16 33.2c0 .51-.2 1-.57 1.37L14 36H8v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1l.93.46c.66.33 1.07 1 1.07 1.74zM56 30v6h-6l-1.43-1.43A1.93 1.93 0 0148 33.2c0-.74.41-1.41 1.07-1.74L50 31v-1c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zM36 42v3l-4 4h-2c0-2-.84-2.84-1.84-3.84.74-.81.83-1.96.84-2.83v-.01c.91.44 1.92.68 3 .68 1.46 0 2.8-.44 3.91-1.19z'
                            fill='#f0d0b4'
                        />
                        <path
                            d='M39 29v7c0 2.42-1.22 4.55-3.09 5.81A6.946 6.946 0 0132 43c-1.08 0-2.09-.24-3-.68-.73-.34-1.39-.81-1.95-1.37A6.958 6.958 0 0125 36v-7l3-2c1.96 1.3 4.25 2 6.61 2z'
                            fill='#f0d0b4'
                        />
                        <circle cx='32' cy='8' fill='#ff826e' r='6' />
                        <path
                            d='M13 20v1a2.996 2.996 0 01-5.12 2.12C7.34 22.58 7 21.83 7 21v-1h3z'
                            fill='#aab2bd'
                        />
                        <path
                            d='M13 19.21V20H7v-.75c0-1-.46-1.97-1.3-2.51a7.97 7.97 0 01-3.63-7.79c.45-3.59 3.4-6.49 7-6.9C13.9 1.51 18 5.27 18 10c0 2.83-1.47 5.31-3.68 6.73-.84.54-1.32 1.48-1.32 2.48z'
                            fill='#ffeaa7'
                        />
                        <circle cx='10' cy='10' fill='#fcd770' r='2' />
                        <path
                            d='M62 10v4l-2.53.84c-.06.15-.11.29-.18.43l1.2 2.39-2.83 2.83-2.39-1.2c-.14.07-.28.12-.43.18L54 22h-4l-.84-2.53c-.15-.06-.29-.11-.43-.18l-2.39 1.2-2.83-2.83 1.2-2.39c-.07-.14-.12-.28-.18-.43L42 14v-4l2.53-.84c.06-.15.11-.29.18-.43l-1.2-2.39 2.83-2.83 2.39 1.2c.14-.07.28-.12.43-.18L50 2h4l.84 2.53c.15.06.29.11.43.18l2.39-1.2 2.83 2.83-1.2 2.39c.07.14.12.28.18.43zm-6 2c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z'
                            fill='#fcd770'
                        />
                        <g>
                            <path d='M54 27h-2c-1.654 0-3 1.346-3 3v.382l-.376.188A2.922 2.922 0 0047 33.197c0 .785.306 1.522.86 2.077l1.14 1.14v8.95a.544.544 0 01-.157.379.541.541 0 01-.46.151l-.566-.087c-.417-1.375-1.495-2.29-2.394-3.044C44.538 42.021 44 41.531 44 41c0-1.377.229-2.291.47-3.257.26-1.042.53-2.12.53-3.743 0-2.673-1.38-4.633-2-5.379V28.5C43 22.159 37.841 17 31.5 17S20 22.159 20 28.5v6.871c-1.067.605-3 2.178-3 5.629 0 1.697.76 3.166 1.823 4.4l-3.204.493a.534.534 0 01-.618-.53v-8.95l1.14-1.14A2.918 2.918 0 0017 33.197a2.92 2.92 0 00-1.624-2.627L15 30.382V30c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v16.406c0 1.939.755 3.763 2.127 5.136a7.209 7.209 0 006.036 2.07L20 53.008V63h24v-9.992l4.837.604a7.206 7.206 0 006.036-2.071A7.215 7.215 0 0057 46.406V30c0-1.654-1.346-3-3-3zm-4.481 5.359L51 31.618V30c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v5h-4.586l-1.14-1.14a.934.934 0 01-.274-.663.93.93 0 01.519-.838zm-28.203 4.59l.684-.228V28.5c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5v.914l.293.293C41.31 29.724 43 31.444 43 34c0 1.377-.229 2.291-.47 3.257-.26 1.042-.53 2.12-.53 3.743 0 1.503 1.136 2.455 2.138 3.295.446.374.878.737 1.215 1.132L37 44.142v-1.907A7.986 7.986 0 0040 36v-8h-5.395a10.87 10.87 0 01-6.051-1.832l-.554-.37-4 2.667V36c0 2.943 1.602 5.512 3.974 6.902-.049.591-.185 1.175-.556 1.581l-.644.707.676.676c.962.961 1.542 1.545 1.549 3.111l-.064.831c-.195 1.269-.937 3.224-3.482 4.797-.629-1.06-1.543-1.865-2.373-2.595A18.95 18.95 0 0122 51.002V51h-.002c-.631-.652-.998-1.243-.998-2 0-.6.108-1.076.24-1.439a21.494 21.494 0 004.409 2.375l.703-1.873C24.307 47.297 19 44.533 19 41c0-3.187 2.23-4.021 2.316-4.051zM32 42c-3.309 0-6-2.691-6-6v-6.465l2.016-1.344A12.86 12.86 0 0034.605 30H38v6c0 3.309-2.691 6-6 6zm0 2a7.945 7.945 0 003-.589v1.175L31.586 48h-.664c-.201-1.355-.798-2.219-1.479-2.955a4.66 4.66 0 00.438-1.339A7.978 7.978 0 0032 44zm-1.072 6h.658l1.011 1.011L33.865 61H30.08l.844-10.968a.35.35 0 01.004-.032zm2.486-1l2.935-2.935.162.025-1.092 4.914zM10 29h2c.552 0 1 .449 1 1v1.618l1.481.741a.936.936 0 01.245 1.501L13.586 35H9v-5c0-.551.448-1 1-1zm4.915 22.628a5.23 5.23 0 01-4.374-1.5A5.237 5.237 0 019 46.406V37h4v8.364c0 .677.264 1.314.743 1.793a2.547 2.547 0 002.179.713l3.288-.506A6.332 6.332 0 0019 49c0 .788.211 1.461.541 2.057zM22 53.727c.894.792 1.711 1.568 2.052 2.589l.364 1.094 1.031-.516c1.331-.665 2.339-1.426 3.113-2.213L28.074 61H22zm31.459-3.6a5.226 5.226 0 01-4.374 1.501l-4.961-.62L42 51v10h-6.119l-.975-7.68 1.675 1.675 1.911-8.6 9.587 1.475a2.552 2.552 0 002.178-.713A2.52 2.52 0 0051 45.364V37h4v9.406a5.233 5.233 0 01-1.541 3.721zM32 15c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5z' />
                            <path d='M35.707 6.707l-1.414-1.414L31 8.586l-1.293-1.293-1.414 1.414L31 11.414zM10 25c2.206 0 4-1.794 4-4v-1.792c0-.669.33-1.297.862-1.639A8.964 8.964 0 0019 10a9.012 9.012 0 00-3.006-6.713 9.04 9.04 0 00-7.039-2.228c-4.052.459-7.365 3.723-7.88 7.763-.447 3.508 1.118 6.865 4.085 8.761.518.332.84.97.84 1.667V21c0 2.206 1.794 4 4 4zm0-2c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2zM9 10a1.001 1.001 0 111 1c-.552 0-1-.449-1-1zm-5.94-.925c.399-3.137 2.974-5.673 6.12-6.029.278-.031.554-.046.828-.046 1.726 0 3.354.617 4.654 1.778A7.013 7.013 0 0117 10a6.972 6.972 0 01-3.219 5.887c-1.058.679-1.704 1.832-1.768 3.113H11v-6.184A2.996 2.996 0 0013 10c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.402 2 2.816V19H7.985c-.074-1.292-.711-2.44-1.749-3.102-2.307-1.475-3.525-4.089-3.176-6.823zM63 9.279l-2.455-.819 1.157-2.314-3.848-3.848-2.315 1.158L54.721 1H49.28l-.818 2.456-2.315-1.158-3.848 3.848 1.157 2.314L41 9.279v5.441l2.455.819-1.157 2.314 3.848 3.848 2.315-1.158.818 2.457h5.441l.818-2.456 2.315 1.158 3.848-3.848-1.157-2.314L63 14.721zm-2 4l-2.294.765-.169.441a9.1 9.1 0 01-.155.379l-.194.433 1.081 2.162-1.809 1.809-2.162-1.081-.433.194a6.843 6.843 0 01-.375.153l-.445.168L53.279 21H50.72l-.766-2.298-.445-.168a6.843 6.843 0 01-.375-.153l-.433-.194-2.162 1.081-1.809-1.809 1.081-2.162-.194-.433c-.056-.125-.105-.251-.155-.379l-.169-.441L43 13.279V10.72l2.294-.765.169-.441a9.1 9.1 0 01.155-.379l.194-.433-1.081-2.162 1.809-1.809 2.162 1.081.433-.194c.123-.055.248-.105.375-.153l.445-.168L50.721 3h2.559l.766 2.298.445.168c.127.048.252.098.375.153l.433.194 2.162-1.081 1.809 1.809-1.081 2.162.194.433c.056.125.105.251.155.379l.169.441 2.293.765z' />
                            <path d='M52 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z' />
                        </g>
                    </svg>
                </Link>
            </div>
            <div className='hover-nav'>
                <Link to='/'>
                    <h1 className='font-bold text-3xl text-center uppercase '>
                        #<span role='img' aria-label='100 emoji'>💯</span>Days-Tracker
                    </h1>
                </Link>
            </div>
            <div className='hover-nav-svg w-12 h-12'>
                <Link to='/add'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 477.867 477.867'
                        className='w-12'>
                        <path d='M392.533 0h-307.2C38.228.056.056 38.228 0 85.333v307.2c.056 47.105 38.228 85.277 85.333 85.333h307.2c47.105-.056 85.277-38.228 85.333-85.333v-307.2C477.81 38.228 439.638.056 392.533 0zm51.2 392.533c0 28.277-22.923 51.2-51.2 51.2h-307.2c-28.277 0-51.2-22.923-51.2-51.2v-307.2c0-28.277 22.923-51.2 51.2-51.2h307.2c28.277 0 51.2 22.923 51.2 51.2v307.2z' />
                        <path d='M324.267 221.867H256V153.6c0-9.426-7.641-17.067-17.067-17.067s-17.067 7.641-17.067 17.067v68.267H153.6c-9.426 0-17.067 7.641-17.067 17.067S144.174 256 153.6 256h68.267v68.267c0 9.426 7.641 17.067 17.067 17.067S256 333.692 256 324.267V256h68.267c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.066-17.067-17.066z' />
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
