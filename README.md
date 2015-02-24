# Step 2: Set Up Glass

In this step, the application will be set up to target Google Glass.
First, run this command from the project root:

    cordova platform add android

This will add the `android` platform to your project and configure it. After
this, you need to add the specialized Glass support.  This is done by adding
the Cordova Google Glass plugin[1] to your project:

    cordova plugin add https://github.com/aphex/cordova-glass

After this, you will need to set up the voice trigger for your application.
Edit `platforms/android/res/values/glass.xml` and change the following entry.

    <string name="app_launch_voice_trigger">hello cordova</string>

For the tutorial, change the `hello cordova` to `glass tutorial`.  At this
point, you can run the tutorial on your Glass and even start it by speaking
`glass tutorial` at the Ok Glass prompt.  Unfortunately, exiting the program
needs to be set up manually and we haven't done that yet.  We'll start on
that in the next step.

[1] https://github.com/aphex/cordova-glass
