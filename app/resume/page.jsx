'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// lib
import { about, experience, education, skills } from '@/lib/resumeData';

const Resume = () => {
  return (
    <section className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {experience.map(({ icon, title, description }, index) => (
                  <div key={index}>
                    <h3 className='text-4xl font-bold'>{title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {description}
                    </p>
                  </div>
                ))}
                <ScrollArea className='h-[400px] overflow-y-scroll'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.flatMap(({ items }) =>
                      items.map(
                        ({ company, position, duration }, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap1'
                          >
                            <span className='text-accent'>{duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px]text-center lg:text-left'>
                              {position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{company}</p>
                            </div>
                          </li>
                        )
                      )
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {education.map(({ icon, title, description }, index) => (
                  <div key={index}>
                    <h3 className='text-4xl font-bold'>{title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {description}
                    </p>
                  </div>
                ))}
                <ScrollArea className='h-[400px] overflow-y-scroll'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.flatMap(({ items }) =>
                      items.map(
                        ({ institution, degree, duration }, itemIndex) => (
                          <li
                            key={itemIndex}
                            className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap1'
                          >
                            <span className='text-accent'>{duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px]text-center lg:text-left'>
                              {degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{institution}</p>
                            </div>
                          </li>
                        )
                      )
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full'>
              Skills
            </TabsContent>
            {/* about me */}
            <TabsContent value='about' className='w-full'>
              About Me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
