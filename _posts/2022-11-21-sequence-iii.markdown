---
layout: post
title:  "Sequence III"
date:   2022-11-21 15:35:25 -0800
categories: advocacy open-source
---
## The Problem

In public schools and universities across the United States, students are being required to learn non-free software. From programs for specific courses, such as Solidworks and MATLAB, to ubiquitous non-free software, such as the Windows Operating System (OS) and Microsoft Office. 

Non-free software is often a black box with a strict licensing agreement. This restricts the student from being able to freely use their device. Oftentimes, the incentives of software companies lead to the device [violating the student's privacy](https://www.theguardian.com/us-news/2022/aug/26/anti-cheating-technology-students-tests-proctorio), or [being used for advertising](https://www.theguardian.com/technology/2017/mar/10/windows-10-users-complain-new-microsoft-subscription-onedrive-adverts). 

This is especially troubling in the context of public schools and universities. These institutions are supposed to be equipping students with the knowledge necessary for being a good citizen in a free country in the future. And yet, by choosing to use non-free software, they are putting their students' knowledge behind a company's proprietary user agreement.

## What Can be Done?

Public schools and universities in the United States should switch their curriculum to only use free software.

## What is Free Software?

Free software, according to the [Free Software Foundation](https://www.fsf.org/about/what-is-free-software), is software that allows its users to freely run, copy, share, study, and modify it. According to the GNU Project, free software must have the [four essential freedoms](https://www.gnu.org/philosophy/free-sw.html#four-freedoms):

> - The freedom to run the program as you wish, for any purpose (freedom 0).
> - The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this.
> - The freedom to redistribute copies so you can help others (freedom 2).
> - The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.

Free software is not necessarily free of cost. Free software is software that respects the freedom of the users.

## The Benefits of Free Software

While teaching free software is an ethically better choice, there are also other practical benefits to teaching free software.

# Ownership

Free software allows the user to own their programs and the outputs of their program. If an educator teaches using only free software, they can be confident that their students will be able to access and retain all of their content, including content on the computer, and thus be able to retain their knowledge. 

While ownership of software might be most noticeable in a class on software, these benefits extend to all classes that rely on software for the education of the student. This is best illustrated by looking at the current state of non-free software in education.

Rico, a friend of one of the authors, recently graduated with a degree in Mechanical Engineering from SCU, and has been looking for a job. To bolster his job applications, he wanted to showcase the work he had created for his classes using the non-free program Solidworks. While he was in the lab editing his files, his access to the SCU computing resources was revoked due to being an alumni for a number of months. This cut off his access not only to his edited files, but to Solidworks as well. He no longer had any means of showcasing his work to potential employers, as he does not have Solidworks at home and cannot afford a personal license for Solidworks without a job. 

This example also illustrates another practical benefit of using free software -- cost.

# Cost

While non-free software is often offered without cost for students, this is not the case after they graduate. Companies expect alumni to pay the full price for their software. This is often the reason for having provided their software without cost or for lower cost in the first place. Students who learn proprietary software become the most comfortable using that software, and once they graduate they urge their employers to purchase the software that they had learned to use. 

For instance, in the Cal Poly Mechanical Engineering program, all required software is provided without cost to the student. The school does pay for some software on behalf of the student, often at a reduced rate. However, like Rico at SCU, once a Cal Poly student graduates, they are expected to pay full price for the software they had learned at a public university. A breakdown of this cost for a selection of the software taught can be seen in the chart below:

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!--<script type="text/javascript">
{% include sequence-iii/main.js %}
</script>-->
<script type="text/javascript" src="/js/sequence-iii/main.js"></script>

<div id="closedCostContainer" style="text-align: center; padding:1em;">
    <img id="closedCostBackupImage" style="padding:1em;" src="/assets/sequence-iii/closedCostScreenshot.png" />
    <canvas width="0" height="0" id="closedCostCanvas">
    </canvas>
    <br/>
    Number of years: <span id="closedCostYearsCounter">Enable Javascript and refresh your browser to enable use of the interactive chart</span>
    <br/>
    <input type="range" min="1" max="1" value="1" class="slider" id="closedCostRange">
</div>

Free alternatives to this non-free software do exist. Instead of Solidworks, the department can teach [FreeCAD](https://www.freecadweb.org/). Instead of Microsoft Office, they can teach and use [LibreOffice](https://www.libreoffice.org/). Instead of MATLAB, they can teach [Python](https://www.python.org/) and [SimuPy](https://simupy.readthedocs.io/en/latest/overview.html). Instead of using computers running Windows and software that relies on it, they can use a Linux OS such as [Debian](https://www.debian.org/) or [Pop!\_OS](https://pop.system76.com/). And instead of teaching Engineering Equation Solver for their thermodynamics courses, they can use [CoolProp](http://www.coolprop.org/)'s Python module and [Pint](https://pint.readthedocs.io/en/stable/index.html). 

Not only are all of these alternatives free software, they are also distributed without cost. A student who learns using this software would not end up in the same situation as Rico, as they would only need access to sufficient computer hardware to continue using the software they had learned to use at public university. With no cost *and* free.

# Community

The third and fourth software freedom as defined by the GNU Project include the freedom to modify and redistribute the software with modifications. 

## Common Arguments Against Free Software

<!--
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
-->
