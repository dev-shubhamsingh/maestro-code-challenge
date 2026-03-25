# Maestro Android Code Challenge

This repository contains my Android automation solution for the `Me` screen using Maestro.

## What is covered

- Sign in with a manually created account
- Navigate to the `Me` screen
- Verify there are no activities
- Verify `Add clubs` is visible in the bag section
- Verify the `Off the tee` section has no values

## Account setup

The account used for automation was created manually in the app, as requested.  
The automation starts from sign-in and does not automate account creation.

## Project structure

```text
maestro/
  flows/
    android/
      me_screen.yaml
    subflows/
      sign_in.yaml
      navigate_to_me.yaml
      assert_off_the_tee_empty.yaml
  scripts/
    bootstrap.js
```

## Notes about the provided APK

The provided QA build uses slightly different wording from the challenge brief:

- `Activities` empty state is shown as `None`
- `My Bag` appears as `Bag`
- `Off the tee` empty values appear as `-`

The assertions in the flow are based on the actual UI shown by the provided APK.

## Running the flow

```bash
maestro test \
  -e APP_ID=dk.trackman.golfapp.qa.debug \
  -e EMAIL=your-email@example.com \
  -e PASSWORD=your-password \
  maestro/flows/android/me_screen.yaml
```

## Verification

The flow was validated locally on Android against the provided APK.
