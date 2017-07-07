# Quick Guide to Using Zip Files 

As you send data back and forth across the Internet, downloading documents here and emailing files there, you may have come across a curious little file format called a "zip" file.  The zip file is a tool that helps you manage the transfer of data.  There are two main utilities of a zip file: **storage** and **compression**.  In terms of storage, the zip file functions as a single place where you can store a collection of separate files.  Another purpose for using a zip file is to compress your data before you send it.  As you may have guessed, the name of a zip file terminates with the extension: `.zip`   

In this guide, we will go over how to create a zip file on different platforms.

## How to Upload Files Using a Zip File
Imagine you have just finished creating a simple website and you want to quickly email the site over to your friend.  Here is the file structure of your site:

```
my_awesome_site/
├── about.html
├── assets
│   ├── javascript
│   │   └── move.js
│   └── stylesheets
│       ├── main.css
│       └── reset.css
├── index.html
└── portfolio.html

3 directories, 6 files

```
 
As you can see, the website has six files that are arranged in different directories.  Without having a way to group all of these files, you would need to flatten the structure of your website and upload six individual files.  However, with a zip file you can pack all of the files into one single container.  Furthermore, you can maintain the original directory arrangement.  Now you only have to worry about sending one file to your friend, and the file structure of your website remains intact.

In the following sections, we will go over how to archive the `my_awesome_site` website in a zip file with examples on Mac, Windows, and Linux systems.

### Mac
Recent versions of the Mac OS have built in tools for creating zip files.  One such tool is called the *Archive Utility*.  In order to access the Archive Utility, you can simply use the graphical user interface.  Open a Finder window and navigate to the directory where you have the `my_awesome_site` files.

The first step is to gather all of the files you want to add to a zip file into one folder.  Alternatively, you can group select all of the files you want to bundle into a zip file.

**Select a folder to zip**

![Select a folder to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/mac_folder_select.png "Select a folder to zip")

**Select a group of files to zip**

![Select a group of files to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/mac_group_select.png "Select a group of files to zip")


Next, Control-click (or right click) on the folder (or the group-selected images) to activate a menu of options.  In the menu, you should see the option `Compress "my_awesome_site"`.  Scroll down and click on `Compress "my_awesome_site`

**Select Compress Option**

![Select Compress Option](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/mac_execute_compress.png "Select Compress Option")



Once the process completes, you should see another file with the extension `.zip` in the same directory as the original `my_awesome_site` files.

**Zip file output**

![Zip file output](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/mac_zip_output.png "Zip file output")





### Windows
Recent versions of Windows have built in tools for creating zip files.  One of the easiest ways to create a zip file on a Windows system is to go through the graphical user interface.  Open a File Explorer window and navigate to the directory where you have the `my_awesome_site` files.

The first step is to gather all of the files you want to add to a zip file into one folder.  Alternatively, you can group select all of the files you want to bundle into a zip file.


**Select a folder to zip**

![Select a folder to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/win_folder_select.png "Select a folder to zip")

**Select a group of files to zip**

![Select a group of files to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/win_group_select.png "Select a group of files to zip")


Next, right click on the folder (or the group-selected images) to activate a menu of options.  In the menu, you should see an option called `Send to`.  Scroll down and hover over `Send to`.  

**Select Send To Option**

![Select Send To Option](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/win_send_to.png "Select Send To Option")

Another menu of options will pop up.  In this second menu, you should see an option called `Compressed (zipped) folder`.  Click on `Compressed (zipped) folder` to create the zip file.

**Select Compressed (zipped) folder Option**

![Select Compressed folder Optionp](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/win_execute_compress.png "Select Compressed folder Option")



Once the process completes, you should see a file with a little icon of a zipped up folder in the same directory as the original `my_awesome_site` files.  Its name will be `my_awesome_site.zip` if you created the zip file at the folder level of the project.  If you group selected files instead, it will have the name of one of the selected files in the group plus the `.zip` extension.  You can rename the zip file as you normally rename files - just remember to leave the `.zip` extension.

*\* Note:  You may not see the `.zip` extension depending on the settings of your File Explorer window.  Besides the zipped folder icon, another clue that you have a zip file is that the file type will be "Compressed (zipped) folder"*


**Zip file output**

![Zip file output](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/win_zip_output.png "Zip file output")





### Linux
There are a variety of ways to get to the zip file utilities on a system running a Linux distribution.  One of the easiest ways to create a zip file on a Linux system is to go through the graphical user interface.  Open the file manager and navigate to the directory where you have the `my_awesome_site` files.  

*\*Note: This demonstration was done on a system using Ubuntu 16.04, but the process should be similar on other distributions and versions of Linux.*

The first step is to gather all of the files you want to add to a zip file into one folder.  Alternatively, you can group select all of the files you want to bundle into a zip file.

**Select a folder to zip**

![Select a folder to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/linux_folder_select.png "Select a folder to zip")

**Select a group of files to zip**

![Select a group of files to zip](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/linux_group_select.png "Select a group of files to zip")


Next, right click on the folder (or the group-selected images) to activate a menu of options.  In the menu, you should see an option called `Compress...`.  Scroll down and click on `Compress...`

A window will pop-up prompting you to make some choices about the archive you will create.  First, you want to decide on the name for your zip file and type that into the "Filename:" text field.  

Next, you will need to make sure that the file type for the file you generate is actually "zip" and not some other file type.  You can do this by clicking on the little black triangle on the drop down menu to the right of the "Filename:" text field.  This will drop down a menu of file extension options.  Search for `.zip` and click on that.  

Finally, you should choose the destination location for your zip file once it has been generated.

**Compress dialogue window**

![Compress dialogue window](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/linux_click_create.png "Compress dialogue window")


Once you have properly set all of the configuration options, click on the `Create` button to generate the zip file.  A window will pop up indicating that your zip file was successfully created.

**Successfully created zip file**

![Successfully created zip file](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/linux_success_msg.png "Successfully created zip file")


Now, if you go to the directory you set as the destination location for the zip file output, you should see an icon representing your new zip file.

**Zip file output**

![Zip file output](https://preview.c9users.io/jb2718/ls_front_end_c9/article_stuff/images/linux_zip_output.png "Zip file output")



## Conclusion

Once the zip file has been created for the `my_awesome_site` website, you can simply upload it in an email as if it were one document and send it along to your friend!
