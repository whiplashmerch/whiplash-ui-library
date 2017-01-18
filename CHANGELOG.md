#v1.2.0
With this small update comes the new `<Dropdown />` Component! Basically, all
you do is add the children you want to display and Dropdown turns it into a
toggable list! Nioce. We are cooking now, so keep your eyes peeled for more Components
being added by the weeks.

Check out the demo site for all info needed for this update.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.2.0
```

npm:
```
npm install whiplash-ui-library@1.2.0 --exact
```


#v1.1.1
This nice little update brings a cleaner `<CheckButton />` Component now only
accepting a `defaultSelected` prop to compliment expected React behavior in
addition to the introduction of the `<Toggle />` Component! 

Check out the demo site for all info needed for both of these updates.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.1.1
```

npm:
```
npm install whiplash-ui-library@1.1.1 --exact
```

#v1.0.7
Ever find yourself needing to post a small "flash" message in the UI that is just
temporary but imperitive for informing the user about something which has happened?
Look no further, for the NotificationToast Component is here! 🎉

It comes with a default, pending, and error theme to meet your needs. 

Keep a look out for our next update which will close out this milestone bringing the
ShopCard Component.

It will be a "card" influenced component that will display information along with
including a footer to add extra icons for things if you need them.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.0.7 --exact
```

npm:
```
npm install whiplash-ui-library@1.0.7 --exact
```

#v1.0.5
Nothing big here, just a small adjustment to the Button docs and a style update
for the `secondary-dark` Button `theme`. 😎

#v1.0.3
Alrighty! Just in time for the holiday's, we have a pretty big update including:

* New brand fonts: Aller Light & Lato
* Updated UI's for all existing Components
* NEW `Icon` COMPONENT! 🎉
* NEW `InformationalIcon` COMPONENT! 🎉
* NEW `CheckBox` COMPONENT! 🎉
* REMOVAL OF APHRODITE! 🎉 🎉

Now that we no longer depend on Aphrodite, you don't have to worry about it
failing your tests like a freaking n00b. Check out our README and ensure that
you are including a default `font-size: 16px` in your app to make sure our
library is cohesive (we use `rems`).

We have more components coming at the start of next year, so keep an eye out!

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.0.3 --exact
```

npm:
```
npm install whiplash-ui-library@1.0.3 --exact
```

#v.0.0.9
Hey, d00ds! Nothing big here, just a small update on the `Legend` component.
We've added a better UI to make it easier to understand that you have completed
the items that fall before the active one.

Have a great day and go vote, suckas!

#v.0.0.8
Aw yeah, we snuck in a tiny update 🎉! Meet the `Legend` component. It's great
for pagination usage or any place where you need to show where along the process
a user is (i.e. step 2 of 4). Check out the demo site for usage info. That's 
all we have for now, but the big icon lib component is coming very soon, 
so watch out!


# v0.0.7
Hey, there! 👋 As always, thanks for checking out the first installments of the
Whiplash React UI Library. This change brings an updated UI for the
docs/examples in addition to a new `Breadcrumb` component! 🍞

Additionally, due to the fast response we've had from the installs, we are
now making the repo public so you can
[submit bugs](https://github.com/whiplashmerch/whiplash-ui-library/issues)
if you find any or add feature requests to any of the living Components.

As of right now, we are not allowing any contributions outside of that. 😿

### Future Components
The next versions will introduce a bunch of new Components that will lead up to
the `0.1.0` release ("Be cool Ice Cold, be cool.")!

* ShopCard
* ICONS! 😎
* RadioBtn
* InputStatusIcon
* Legend
* DropdownBtn

Thanks again and we hope you stick around as we grow this resource for the React
community.
